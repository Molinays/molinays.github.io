const DISCORD_ID = '958753896346566696';
const byId = (id) => document.getElementById(id);
const statusNames = {online:'Online',idle:'Inattivo',dnd:'Non disturbare',offline:'Offline'};

function renderPresence(presence) {
  if (!presence?.discord_user) return;
  const user = presence.discord_user;
  const status = presence.discord_status || 'offline';
  byId('discord-name').textContent = user.global_name || user.username || 'Molinays';
  byId('discord-handle').textContent = `@${user.username || 'molinays'}`;
  byId('discord-state').textContent = statusNames[status] || status;
  byId('presence-text').textContent = statusNames[status] || status;
  byId('nav-presence').textContent = (statusNames[status] || status).toUpperCase();
  byId('presence-dot').className = `presence-dot ${status}`;
  byId('avatar-dot').className = `avatar-dot ${status}`;
  if (user.avatar) {
    const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
    byId('discord-avatar').src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
  }
  const spotify = presence.spotify;
  const game = (presence.activities || []).find((activity) => activity.type !== 4 && activity.name !== 'Spotify');
  if (spotify) {
    byId('activity-icon').textContent = '♪';
    byId('activity-title').textContent = spotify.song || 'Spotify';
    byId('activity-sub').textContent = spotify.artist ? `di ${spotify.artist}` : 'In ascolto';
    if (spotify.album_art_url) byId('activity-icon').style.background = `center / cover url("${spotify.album_art_url}")`;
  } else if (game) {
    byId('activity-icon').textContent = '>'; byId('activity-icon').style.background = '';
    byId('activity-title').textContent = game.name || 'Attività Discord';
    byId('activity-sub').textContent = game.details || game.state || 'Attività in corso';
  } else {
    byId('activity-icon').textContent = 'X'; byId('activity-icon').style.background = '';
    byId('activity-title').textContent = 'Nessuna attività condivisa';
    byId('activity-sub').textContent = 'Niente al momento';
  }
}

async function loadPresence() {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    if (!response.ok) throw new Error('Lanyard non disponibile');
    const result = await response.json();
    if (result.success) renderPresence(result.data);
  } catch {
    byId('presence-text').textContent = 'Non disponibile';
    byId('discord-state').textContent = 'Presenza non raggiungibile';
  }
}

function connectPresenceSocket() {
  let retry = 2500;
  let heartbeat;
  const connect = () => {
    const socket = new WebSocket('wss://api.lanyard.rest/socket');
    socket.addEventListener('open', () => { retry = 2500; });
    socket.addEventListener('message', (event) => {
      let packet;
      try { packet = JSON.parse(event.data); } catch { return; }
      if (packet.op === 1) {
        clearInterval(heartbeat);
        heartbeat = setInterval(() => {
          if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify({op:3}));
        }, packet.d.heartbeat_interval);
        socket.send(JSON.stringify({op:2,d:{subscribe_to_id:DISCORD_ID}}));
      } else if (packet.op === 0 && ['INIT_STATE','PRESENCE_UPDATE'].includes(packet.t)) {
        const data = packet.d;
        renderPresence(data?.discord_user ? data : data?.[DISCORD_ID]);
      }
    });
    socket.addEventListener('close', () => {
      clearInterval(heartbeat);
      setTimeout(connect, retry);
      retry = Math.min(retry * 2, 30000);
    });
  };
  connect();
}

function hexToRgb(hex) {
  const value = String(hex).replace('#', '').trim();
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return { r: 39, g: 132, b: 255 };
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function mixRgb(from, to, weight) {
  const mix = (a, b) => Math.round(a + (b - a) * weight);
  return { r: mix(from.r, to.r), g: mix(from.g, to.g), b: mix(from.b, to.b) };
}

function setupAmbient() {
  const canvas = byId('ambient');
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, points = [];
  let dotColor = 'rgba(105,178,255,.7)';
  let lineRgb = { r: 52, g: 126, b: 239 };

  function readAmbientColors() {
    const style = getComputedStyle(document.documentElement);
    const bright = hexToRgb(style.getPropertyValue('--blue2').trim() || '#65c7ff');
    const base = hexToRgb(style.getPropertyValue('--blue').trim() || '#2784ff');
    dotColor = `rgba(${bright.r},${bright.g},${bright.b},.7)`;
    lineRgb = base;
  }
  readAmbientColors();
  if ('MutationObserver' in window) {
    new MutationObserver(readAmbientColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'style'] });
  }
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    width = innerWidth; height = innerHeight;
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = Math.min(72, Math.round(width * height / 17000));
    points = Array.from({length:count}, () => ({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.34,vy:(Math.random()-.5)*.34,r:Math.random()*1.5+.4}));
  }
  function draw() {
    ctx.clearRect(0,0,width,height);
    for (const p of points) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=dotColor; ctx.fill();
    }
    for (let i=0;i<points.length;i++) for (let j=i+1;j<points.length;j++) {
      const dx=points[i].x-points[j].x,dy=points[i].y-points[j].y,d=Math.hypot(dx,dy);
      if (d<135) {ctx.beginPath();ctx.moveTo(points[i].x,points[i].y);ctx.lineTo(points[j].x,points[j].y);ctx.strokeStyle=`rgba(${lineRgb.r},${lineRgb.g},${lineRgb.b},${(1-d/135)*.23})`;ctx.lineWidth=.8;ctx.stroke();}
    }
    requestAnimationFrame(draw);
  }
  addEventListener('resize',resize,{passive:true}); resize(); draw();
}

function setupRoad() {
  const road = document.querySelector('.road');
  const stage = road.querySelector('.road-stage');
  const cards = [...road.querySelectorAll('.road-card')];
  const counter = byId('road-count');
  const controls = document.querySelector('.road-controls');
  const dotsWrap = byId('road-dots');
  const prevButton = byId('road-prev');
  const nextButton = byId('road-next');
  const total = cards.length;
  byId('road-total').textContent = String(total).padStart(2, '0');

  const easeInOut = (value) => value < .5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
  const easeOut = (value) => 1 - Math.pow(1 - value, 3);
  const states = cards.map(() => null);
  const jumpers = cards.map((card, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'road-jump';
    button.textContent = String(i + 1).padStart(2, '0');
    button.setAttribute('aria-label', `Vai al progetto ${String(i + 1).padStart(2, '0')}`);
    button.addEventListener('click', () => goToIndex(i));
    dotsWrap.append(button);
    return button;
  });
  let index = 0;
  let target = 0;
  let position = 0;
  let animating = false;
  let snapping = false;
  let stageHeight = innerHeight;
  let heights = [];
  let lastWheel = -1e4;
  let lastDirection = 1;
  let wheelAccum = 0;
  let wheelOpen = true;
  let idleTimer = 0;
  let touchStartY = null;
  let touchConsumed = false;
  let lastTouchEnd = -1e4;

  function measure() {
    stageHeight = stage.clientHeight || innerHeight;
    heights = cards.map((card) => card.offsetHeight || 440);
  }

  function render() {
    const focusY = stageHeight * .58;
    const step = Math.max(22, Math.min(46, stageHeight * .048));
    const baseHeight = Math.max(...heights, 440);
    cards.forEach((card, i) => {
      const offset = i - position;
      const ahead = Math.max(0, offset);
      const behind = Math.max(0, -offset);
      const height = heights[i] || baseHeight;
      const scale = offset >= 0 ? Math.max(.5, Math.pow(.9, ahead)) : 1 - Math.min(1.2, behind) * .06;
      const shift = offset >= 0 ? -ahead * step : Math.min(1.2, behind) * 110;
      const distance = Math.abs(offset);
      const backwards = target < index;
      const opacity = offset >= 0
        ? Math.max(.3, Math.pow(.82, Math.max(0, ahead - .45)))
        : Math.max(0, 1 - distance * (backwards ? 1.15 : 2.6));
      const center = focusY + shift;
      const reachable = Math.abs(offset) < .3;
      card.style.setProperty('--card-y', `${(center - height / 2).toFixed(1)}px`);
      card.style.setProperty('--card-scale', scale.toFixed(3));
      card.style.setProperty('--card-opacity', opacity.toFixed(3));
      card.style.setProperty('--card-order', String(Math.max(1, 120 - Math.round(distance * 12))));
      card.style.setProperty('--card-pointer', reachable ? 'auto' : 'none');
      if (states[i] !== reachable) {
        states[i] = reachable;
        card.inert = !reachable;
        card.setAttribute('aria-hidden', String(!reachable));
      }
    });
    counter.textContent = String(index + 1).padStart(2, '0');
    jumpers.forEach((button, i) => {
      button.classList.toggle('is-active', i === index);
      button.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
    prevButton.disabled = animating || index === 0;
    nextButton.disabled = animating || index === total - 1;
    controls.classList.toggle('is-busy', animating);
  }

  function stageRect() {
    return stage.getBoundingClientRect();
  }

  function aligned() {
    const top = stageRect().top;
    return top > -3 && top < 3;
  }

  function snapIntoView() {
    if (snapping) return;
    snapping = true;
    const from = scrollY;
    const distance = road.getBoundingClientRect().top;
    const duration = Math.min(520, Math.max(240, Math.abs(distance) * .75));
    const started = performance.now();
    function step(now) {
      const progress = Math.min(1, (now - started) / duration);
      scrollTo(0, from + distance * easeInOut(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
        return;
      }
      snapping = false;
    }
    requestAnimationFrame(step);
  }

  function settle() {
    if (animating || snapping || aligned()) return;
    const rect = stageRect();
    if (rect.top >= 0) return;
    const seen = Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0);
    if (seen < innerHeight * .6) return;
    if (lastDirection > 0 && index === total - 1) return;
    snapIntoView();
  }

  function goTo(next) {
    const from = position;
    const duration = Math.min(1500, 700 + Math.abs(next - from) * 320);
    const started = performance.now();
    animating = true;
    target = next;
    function frame(now) {
      const progress = Math.min(1, (now - started) / duration);
      position = from + (next - from) * easeOut(progress);
      render();
      if (progress < 1) {
        requestAnimationFrame(frame);
        return;
      }
      position = next;
      index = next;
      target = next;
      animating = false;
      render();
    }
    requestAnimationFrame(frame);
  }

  function go(direction) {
    if (animating) return 'busy';
    const next = index + direction;
    if (next < 0 || next > total - 1) return 'edge';
    goTo(next);
    return 'moved';
  }

  function goToIndex(target) {
    if (animating) return;
    if (target < 0 || target > total - 1 || target === index) return;
    goTo(target);
  }

  prevButton.addEventListener('click', () => go(-1));
  nextButton.addEventListener('click', () => go(1));

  stage.addEventListener('wheel', (event) => {
    const rect = stageRect();
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
    if (!delta) return;
    const direction = delta > 0 ? 1 : -1;
    const now = performance.now();
    lastDirection = direction;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(settle, 240);

    if (rect.top > 3 || rect.top < -3) {
      const seen = Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0);
      if (seen < innerHeight * .5) return;
      const towards = direction > 0 ? rect.top > 0 : rect.top < 0;
      if (!towards) return;
      event.preventDefault();
      snapIntoView();
      return;
    }

    const next = index + direction;
    if (next < 0 || next > total - 1) return;

    event.preventDefault();
    if (now - lastWheel > 260) {
      wheelAccum = 0;
      wheelOpen = true;
    }
    lastWheel = now;
    if (animating || snapping || !wheelOpen) return;
    wheelAccum += delta;
    if (Math.abs(wheelAccum) < 24) return;
    wheelAccum = 0;
    wheelOpen = false;
    go(direction);
  }, { passive: false });

  stage.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
    touchConsumed = false;
    wheelOpen = performance.now() - lastTouchEnd > 260;
  }, { passive: true });

  stage.addEventListener('touchmove', (event) => {
    if (touchStartY === null) return;
    const rect = stageRect();
    const delta = touchStartY - event.touches[0].clientY;
    const direction = delta > 0 ? 1 : -1;
    lastDirection = direction;

    if (!aligned()) {
      const seen = Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0);
      if (seen < innerHeight * .5) return;
      const towards = direction > 0 ? rect.top > 0 : rect.top < 0;
      if (!towards) return;
      event.preventDefault();
      if (!touchConsumed) {
        touchConsumed = true;
        snapIntoView();
      }
      return;
    }

    const next = index + direction;
    if (next < 0 || next > total - 1) return;
    event.preventDefault();
    if (animating || touchConsumed || !wheelOpen) return;
    if (Math.abs(delta) < 44) return;
    touchConsumed = true;
    touchStartY = event.touches[0].clientY;
    go(direction);
  }, { passive: false });

  stage.addEventListener('touchend', () => {
    lastTouchEnd = performance.now();
    touchStartY = null;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(settle, 240);
  }, { passive: true });

  addEventListener('keydown', (event) => {
    if (!aligned() || event.ctrlKey || event.metaKey || event.altKey) return;
    if (document.getElementById('terminal')?.open) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
    const keys = { ArrowDown: 1, PageDown: 1, ArrowRight: 1, ArrowUp: -1, PageUp: -1, ArrowLeft: -1, ' ': 1 };
    const direction = keys[event.key];
    if (!direction) return;
    lastDirection = direction;
    if (go(direction) === 'edge') return;
    event.preventDefault();
  });

  addEventListener('resize', () => { measure(); render(); settle(); }, { passive: true });
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => { measure(); render(); });
    observer.observe(stage);
    cards.forEach((card) => observer.observe(card));
  }
  if (document.fonts?.ready) document.fonts.ready.then(() => { measure(); render(); });
  addEventListener('load', () => { measure(); render(); }, { once: true });
  measure();
  render();
}
function setupParticleIcons() {
  const icons = {
    terminal: 'M7 8.5l4 3.5-4 3.5M13 15.5h4.5',
    house: 'M3 9.5l9-7.2 9 7.2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9.2 22v-6.6h5.6V22',
    monitor: 'M4 4.5h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM12 16.5v3M8 19.5h8'
  };
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const rasterCache = new Map();
  let particleColor = '#65c7ff';

  function readParticleColor() {
    particleColor = getComputedStyle(document.documentElement).getPropertyValue('--blue2').trim() || '#65c7ff';
  }
  readParticleColor();
  if ('MutationObserver' in window) {
    new MutationObserver(readParticleColor).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'style'] });
  }

  function rasterIcon(path, size) {
    const key = `${path}|${size}`;
    const cached = rasterCache.get(key);
    if (cached) return cached;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.scale(size / 24, size / 24);
    ctx.lineWidth = 2.4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#ffffff';
    ctx.stroke(new Path2D(path));
    const data = ctx.getImageData(0, 0, size, size).data;
    const stride = size > 130 ? 3 : 2;
    const points = [];
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (let y = 0; y < size; y += stride) {
      for (let x = 0; x < size; x += stride) {
        if (data[(y * size + x) * 4 + 3] > 140) {
          points.push({ x, y });
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    // Centra il disegno sul proprio riquadro: qualunque path resta simmetrico
    const shiftX = size / 2 - (minX + maxX) / 2;
    const shiftY = size / 2 - (minY + maxY) / 2;
    const centered = points.map((point) => ({ x: point.x + shiftX, y: point.y + shiftY }));
    rasterCache.set(key, centered);
    return centered;
  }

  document.querySelectorAll('.life-card').forEach((card) => {
    const canvas = card.querySelector('.particle-icon');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const path = icons[canvas.dataset.shape] || icons.terminal;
    let width = 0;
    let height = 0;
    let particles = [];
    let targets = [];
    let hovered = false;
    let visible = true;
    let lastFrame = 0;

    function buildTargets() {
      if (!width || !height) return [];
      const size = Math.round(Math.min(width * .58, height * .52));
      if (size < 40) return [];
      const grid = rasterIcon(path, size);
      const originX = (width - size) / 2;
      const originY = height * .42 - size / 2;
      return grid.map((point) => ({ x: originX + point.x, y: originY + point.y }));
    }

    function assignTargets() {
      particles.forEach((particle) => { particle.target = null; });
      if (!targets.length) return;
      // Solo una parte delle palline compone il disegno: le altre restano a vagare
      const share = .75;
      const formingCount = Math.max(1, Math.round(particles.length * share));
      const free = [];
      const stride = particles.length / formingCount;
      for (let i = 0; i < formingCount; i++) free.push(particles[Math.floor(i * stride)]);
      // I punti sono distribuiti su tutta l'icona, così il disegno resta completo e simmetrico
      for (let i = 0; i < formingCount; i++) {
        const target = targets[Math.floor(i * targets.length / formingCount)];
        let bestIndex = -1;
        let bestDistance = Infinity;
        for (let k = 0; k < free.length; k++) {
          const dx = free[k].hx - target.x;
          const dy = free[k].hy - target.y;
          const distance = dx * dx + dy * dy;
          if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = k;
          }
        }
        if (bestIndex >= 0) {
          const [picked] = free.splice(bestIndex, 1);
          picked.target = target;
          picked.settled = false;
          // partenze scaglionate: arrivano poco a poco, non tutte insieme
          picked.startAt = performance.now() + Math.random() * 1400;
        }
      }
    }

    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const nextWidth = canvas.clientWidth;
      const nextHeight = canvas.clientHeight;
      if (!nextWidth || !nextHeight) return;
      if (nextWidth === width && nextHeight === height) {
        if (hovered) assignTargets();
        return;
      }
      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      targets = buildTargets();
      const count = clamp(Math.round(width * height / 600), 130, 280);
      // Ogni pallina nasce già nel suo punto di riposo: nessuno scatto iniziale
      particles = Array.from({ length: count }, () => {
        const hx = Math.random() * width;
        const hy = Math.random() * height;
        return {
          x: hx,
          y: hy,
          hx,
          hy,
          radius: Math.random() * .9 + .6,
          phase: Math.random() * Math.PI * 2,
          target: null,
          settled: false,
          startAt: 0
        };
      });
      if (hovered) assignTargets();
      // ridisegna subito: il canvas non resta mai vuoto dopo un resize
      paint(performance.now());
    }

    card.addEventListener('pointerenter', () => {
      hovered = true;
      if (!targets.length) targets = buildTargets();
      assignTargets();
    });

    card.addEventListener('pointerleave', () => {
      hovered = false;
      particles.forEach((particle) => { particle.target = null; particle.settled = false; particle.startAt = 0; });
    });

    function paint(time) {
      const delta = lastFrame ? Math.min(64, time - lastFrame) : 16.7;
      lastFrame = time;
      const step = Math.min(1, delta / 16.7);
      // Velocità indipendente dal refresh: identica a 60, 144 o 180 Hz
      const formGain = 1 - Math.pow(1 - .05, step);
      const driftGain = 1 - Math.pow(1 - .012, step);
      if (visible && width && height) {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = particleColor;
        for (const particle of particles) {
          const forming = hovered && particle.target && time >= particle.startAt;
          if (forming) {
            if (particle.settled) {
              // orbita permanente attorno al punto: l'icona resta viva, senza scatti
              const orbit = time * .0009 + particle.phase;
              const radius = 2 + particle.radius * 1.2;
              const targetX = particle.target.x + Math.cos(orbit) * radius;
              const targetY = particle.target.y + Math.sin(orbit * .87) * radius;
              const ease = Math.min(.4, formGain * 2);
              particle.x += (targetX - particle.x) * ease;
              particle.y += (targetY - particle.y) * ease;
            } else {
              const dx = particle.target.x - particle.x;
              const dy = particle.target.y - particle.y;
              if (dx * dx + dy * dy < 4) {
                particle.x = particle.target.x;
                particle.y = particle.target.y;
                particle.settled = true;
              } else {
                particle.x += dx * formGain;
                particle.y += dy * formGain;
              }
            }
          } else {
            const driftX = particle.hx + Math.sin(time * .00022 + particle.phase) * 13;
            const driftY = particle.hy + Math.cos(time * .00017 + particle.phase) * 13;
            particle.x += (driftX - particle.x) * driftGain;
            particle.y += (driftY - particle.y) * driftGain;
          }
          ctx.globalAlpha = forming ? .95 : .38;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, forming ? particle.radius * 1.6 : particle.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
    }

    function draw(time) {
      paint(time);
      requestAnimationFrame(draw);
    }

    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
    else addEventListener('resize', resize, { passive: true });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => { visible = entry.isIntersecting; });
      }, { threshold: 0 }).observe(card);
    }
    // se il contesto viene perso (GPU/driver), lo riprendiamo e ridisegniamo
    canvas.addEventListener('contextlost', (event) => event.preventDefault());
    canvas.addEventListener('contextrestored', () => { resize(); paint(performance.now()); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) paint(performance.now()); });

    resize();
    requestAnimationFrame(draw);
  });
}
function setupReveal() {
  const items=[...document.querySelectorAll('.reveal,.life-card')];
  if ('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px 4% 0px'});
    items.forEach(item=>observer.observe(item));
  } else items.forEach(item=>item.classList.add('is-visible'));
  // rete di sicurezza: ciò che è già a schermo non deve restare invisibile
  function ensureVisible(){
    items.forEach(item=>{
      if(item.classList.contains('is-visible'))return;
      const rect=item.getBoundingClientRect();
      if(rect.top<innerHeight&&rect.bottom>0)item.classList.add('is-visible');
    });
  }
  setTimeout(ensureVisible,600);
  setTimeout(ensureVisible,1600);
  addEventListener('scroll',ensureVisible,{passive:true});
  addEventListener('resize',ensureVisible,{passive:true});
}

function setupTerminal() {
  const dialog=byId('terminal'),form=byId('terminal-form'),input=byId('terminal-input'),output=byId('terminal-output');
  const colors={blue:['#2784ff','#65c7ff','rgba(39,132,255,.3)'],green:['#20bd70','#83f3a5','rgba(32,189,112,.3)'],purple:['#925cff','#d0aaff','rgba(146,92,255,.3)'],red:['#e64b59','#ff9b9b','rgba(230,75,89,.3)'],amber:['#d6921e','#ffd36f','rgba(214,146,30,.3)'],yellow:['#e6c31d','#ffe680','rgba(230,195,29,.3)'],pink:['#df4ca7','#ff9de2','rgba(223,76,167,.3)'],cyan:['#00a6b7','#77f0f4','rgba(0,166,183,.3)']};
  const initialTheme=[getComputedStyle(document.documentElement).getPropertyValue('--blue').trim(),getComputedStyle(document.documentElement).getPropertyValue('--blue2').trim(),getComputedStyle(document.documentElement).getPropertyValue('--glow').trim()];
  function setThemeAccents(theme){const rgb=theme[0].match(/[\da-f]{2}/gi).map(value=>parseInt(value,16));document.documentElement.style.setProperty('--blue-soft',`rgba(${rgb.join(',')},.14)`);document.documentElement.style.setProperty('--blue-mid',`rgba(${rgb.join(',')},.3)`);document.documentElement.style.setProperty('--blue-strong',`rgba(${rgb.join(',')},.5)`);document.documentElement.style.setProperty('--blue-faint',`rgba(${rgb.join(',')},.07)`);}
  function applySurfaces(accent){
    const root=document.documentElement.style;
    const base=hexToRgb(accent);
    const bg=mixRgb(hexToRgb('#070a12'),base,.17);
    const line=mixRgb(base,{r:255,g:255,b:255},.55);
    root.setProperty('--bg',`rgb(${bg.r}, ${bg.g}, ${bg.b})`);
    root.setProperty('--bg-soft',`rgb(${mixRgb(hexToRgb('#0a1220'),base,.15).r}, ${mixRgb(hexToRgb('#0a1220'),base,.15).g}, ${mixRgb(hexToRgb('#0a1220'),base,.15).b})`);
    root.setProperty('--line',`rgba(${line.r}, ${line.g}, ${line.b}, .17)`);
  }
  function applyTheme(theme,reset){
    const root=document.documentElement.style;
    if(reset){
      document.documentElement.removeAttribute('data-theme');
      root.setProperty('--blue',initialTheme[0]);
      root.setProperty('--blue2',initialTheme[1]);
      root.setProperty('--glow',initialTheme[2]);
      ['--bg','--bg-soft','--line'].forEach((name)=>root.removeProperty(name));
      setThemeAccents(initialTheme);
      return;
    }
    document.documentElement.dataset.theme=theme;
    root.setProperty('--blue',colors[theme][0]);
    root.setProperty('--blue2',colors[theme][1]);
    root.setProperty('--glow',colors[theme][2]);
    setThemeAccents(colors[theme]);
    applySurfaces(colors[theme][0]);
  }
  function runThemeWave(bright,strong,apply){
    const wave=document.createElement('div');
    wave.className='theme-wave';
    wave.style.setProperty('--wave-a',bright);
    wave.style.setProperty('--wave-b',strong);
    document.body.append(wave);
    // i colori cambiano mentre l'onda attraversa la pagina
    setTimeout(apply,420);
    setTimeout(()=>wave.remove(),1450);
  }
  function runThemeDownload(label,done){
    const popup=document.createElement('div');
    popup.className='theme-download';
    popup.innerHTML='<div class="theme-download-head"><i></i><span>scaricando tema <b></b></span><em>0%</em></div><div class="theme-download-bar"><i></i></div><div class="theme-download-meta">theme-pack / <b></b> · 1.2 kb</div>';
    const names=popup.querySelectorAll('b');
    names[0].textContent=label;
    names[1].textContent=label;
    document.body.append(popup);
    const fill=popup.querySelector('.theme-download-bar i');
    const pct=popup.querySelector('.theme-download-head em');
    const started=performance.now();
    const duration=780;
    function tick(now){
      const progress=Math.min(1,(now-started)/duration);
      const eased=1-Math.pow(1-progress,3);
      fill.style.transform=`scaleX(${eased.toFixed(3)})`;
      pct.textContent=`${Math.round(eased*100)}%`;
      if(progress<1){requestAnimationFrame(tick);return;}
      pct.textContent='100%';
      setTimeout(()=>{
        popup.classList.add('is-done');
        setTimeout(()=>{popup.remove();done();},430);
      },140);
    }
    requestAnimationFrame(tick);
  }
  let closing=false;
  function openTerminal(){
    if(dialog.open)return;
    closing=false;
    dialog.classList.remove('is-closing');
    dialog.showModal();
    if(!output.childElementCount){print('molios shell [Arch Linux]');print('Digita "help" per vedere i comandi.');}
    input.focus();
  }
  function closeTerminal(){
    if(!dialog.open||closing)return;
    closing=true;
    dialog.classList.add('is-closing');
    setTimeout(()=>{
      dialog.classList.remove('is-closing');
      if(dialog.open)dialog.close();
      closing=false;
    },300);
  }
  function print(text,type='result'){const line=document.createElement('p');line.className=`terminal-line ${type}`;line.textContent=text;output.append(line);output.scrollTop=output.scrollHeight;}
  function commandHelp(){print('Comandi disponibili:');print('help                 mostra i comandi');print('whoami               presenta il profilo');print('projects             elenca i progetti');print('sudo theme <colore>  blue, green, purple, red, amber, yellow, pink, cyan, reset');print('clear                pulisce il terminale');print('exit                 chiude il terminale');}
  function run(raw){const command=raw.trim();if(!command)return;print(`root@molios ~ $ ${command}`,'command');const args=command.toLowerCase().split(/\s+/);
    if(args[0]==='help'||args[0]==='man')commandHelp();
    else if(args[0]==='whoami')print('Molinays — dev, self-hosting, hardware e video editing dal 2024.');
    else if(args[0]==='projects')print('MoliOptimizer · MoliDownloader · MoliArchive · Gaming, cut.');
    else if(args[0]==='clear')output.replaceChildren();
    else if(args[0]==='exit')closeTerminal();
    else if(args[0]==='sudo'&&args[1]==='theme'){
      const color=args[2];
      if(color==='reset'){
        print('Scaricando tema default...','success');
        setTimeout(()=>{closeTerminal();setTimeout(()=>{
          runThemeWave(initialTheme[1],initialTheme[0],()=>applyTheme(null,true));
          runThemeDownload('default',()=>{});
        },240);},380);
        return;
      }
      if(!colors[color]){print(`Tema non trovato. Scegli: ${Object.keys(colors).join(', ')}, reset`,'error');return;}
      print(`Scaricando tema ${color}...`,'success');
      setTimeout(()=>{closeTerminal();setTimeout(()=>{
        // popup al centro e onda che passa sotto, in contemporanea
        runThemeWave(colors[color][1],colors[color][0],()=>applyTheme(color));
        runThemeDownload(color,()=>{});
      },240);},380);
    } else print(`zsh: comando non trovato: ${args[0]} (prova "help")`,'error');
  }
  byId('terminal-launch').addEventListener('click',openTerminal);
  byId('terminal-close').addEventListener('click',closeTerminal);
  dialog.addEventListener('click',event=>{if(event.target===dialog)closeTerminal();});
  dialog.addEventListener('cancel',event=>{event.preventDefault();closeTerminal();});
  dialog.addEventListener('keydown',event=>{
    if(event.ctrlKey&&event.key.toLowerCase()==='c'){event.preventDefault();closeTerminal();}
  });
  form.addEventListener('submit',event=>{event.preventDefault();run(input.value);input.value='';});
}

function setupSmoothScroll() {
  let frame = 0;
  function cancel() {
    if (!frame) return;
    cancelAnimationFrame(frame);
    frame = 0;
    document.documentElement.style.scrollBehavior = '';
  }
  addEventListener('wheel', cancel, { passive: true });
  addEventListener('touchstart', cancel, { passive: true });
  addEventListener('keydown', cancel);

  function scrollToY(top) {
    cancel();
    const from = scrollY;
    const distance = top - from;
    if (Math.abs(distance) < 2) return;
    const duration = Math.min(1400, Math.max(650, Math.abs(distance) * .5));
    const started = performance.now();
    const ease = (value) => value < .5 ? 16 * Math.pow(value, 5) : 1 - Math.pow(-2 * value + 2, 5) / 2;
    document.documentElement.style.scrollBehavior = 'auto';
    function step(now) {
      const progress = Math.min(1, (now - started) / duration);
      scrollTo(0, from + distance * ease(progress));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
        return;
      }
      frame = 0;
      document.documentElement.style.scrollBehavior = '';
    }
    frame = requestAnimationFrame(step);
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    if (!hash || hash.length < 2) return;
    const target = document.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, '', hash);
    scrollToY(Math.round(target.getBoundingClientRect().top + scrollY));
  });
}

function setupButtonRipples() {
  const selector = '.button, .project-link, .road-nav, .road-jump, .contact-links a, .contact-send, .footer button';
  document.addEventListener('pointerdown', (event) => {
    const element = event.target.closest(selector);
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const size = Math.max(54, rect.height * 2.5);
    const layer = document.createElement('span');
    layer.className = 'ripple-layer';
    const dot = document.createElement('span');
    dot.className = 'ripple-dot';
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${event.clientX - rect.left - size / 2}px`;
    dot.style.top = `${event.clientY - rect.top - size / 2}px`;
    layer.append(dot);
    element.append(layer);
    setTimeout(() => layer.remove(), 700);
  });
}

function setupTimeline() {
  const timeline = byId('timeline');
  if (!timeline) return;
  const items = [...timeline.querySelectorAll('.timeline-item')];
  let target = 0;
  let shown = 0;
  let frameId = 0;

  function paint() {
    frameId = 0;
    shown += (target - shown) * .14;
    if (Math.abs(target - shown) < .0015) shown = target;
    timeline.style.setProperty('--timeline-progress', shown.toFixed(4));
    const reached = shown * items.length;
    items.forEach((item, index) => item.classList.toggle('is-on', reached > index + .45));
    if (shown !== target) frameId = requestAnimationFrame(paint);
  }

  function update() {
    const rect = timeline.getBoundingClientRect();
    const start = innerHeight * .88;
    const span = Math.max(1, innerHeight * .52);
    target = Math.min(1, Math.max(0, (start - rect.top) / span));
    if (!frameId) frameId = requestAnimationFrame(paint);
  }

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update, { passive: true });
  update();
}
function setupBoot() {
  const boot=byId('boot');
  if(!boot)return;
  const fill=byId('boot-fill'),value=byId('boot-value');
  const duration=1150;
  const started=performance.now();
  function tick(now) {
    const progress=Math.min(1,(now-started)/duration);
    fill.style.transform=`scaleX(${progress})`;
    value.textContent=`${String(Math.round(progress*100)).padStart(3,'0')}%`;
    if(progress<1){requestAnimationFrame(tick);return;}
    boot.classList.add('is-done');
    document.body.classList.add('is-ready');
    setTimeout(()=>boot.remove(),900);
  }
  requestAnimationFrame(tick);
}

function setupContactForm() {
  const form = byId('contact-form');
  if (!form) return;
  const key = (form.dataset.accessKey || '').trim();
  const fallback = (form.dataset.fallbackEmail || '').trim();
  const status = byId('contact-status');
  const button = byId('contact-send');
  const name = byId('contact-name');
  const email = byId('contact-email');
  const message = byId('contact-message');
  const fields = [name, email, message];

  function say(text, type) {
    status.textContent = text;
    status.classList.toggle('is-ok', type === 'ok');
    status.classList.toggle('is-error', type === 'error');
  }

  function validate() {
    let valid = true;
    fields.forEach((field) => {
      const value = field.value.trim();
      const bad = !value || (field === email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value));
      field.classList.toggle('is-invalid', bad);
      if (bad) valid = false;
    });
    return valid;
  }

  fields.forEach((field) => field.addEventListener('input', () => {
    field.classList.remove('is-invalid');
    if (status.classList.contains('is-error')) say('', '');
  }));

  function sendByMail(data) {
    const subject = encodeURIComponent(`Messaggio dal sito - ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n- ${data.name} (${data.email})`);
    location.href = `mailto:${fallback}?subject=${subject}&body=${body}`;
    say('Apro il tuo client di posta con il messaggio gia scritto.', 'ok');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!validate()) {
      say('Controlla i campi evidenziati.', 'error');
      return;
    }
    const data = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim()
    };
    if (form.elements.botcheck?.checked) {
      say('Messaggio inviato.', 'ok');
      return;
    }
    if (!key) {
      if (fallback) {
        sendByMail(data);
        return;
      }
      say('Form non ancora collegato: manca la chiave di invio. Scrivimi su Discord o GitHub.', 'error');
      return;
    }
    button.disabled = true;
    say('Invio in corso...');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: `Nuovo messaggio dal sito - ${data.name}`,
          from_name: 'Molinays portfolio',
          name: data.name,
          email: data.email,
          message: data.message
        })
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        form.reset();
        say('Messaggio inviato. Ti rispondo il prima possibile.', 'ok');
      } else if (response.status === 429) {
        say('Troppi messaggi in poco tempo: riprova tra un minuto.', 'error');
      } else if (response.status === 400 || response.status === 422) {
        say('Controlla i dati inseriti e riprova.', 'error');
      } else {
        say('Invio non riuscito, riprova tra poco.', 'error');
      }
    } catch {
      say('Rete non raggiungibile: riprova o scrivimi su Discord.', 'error');
    }
    button.disabled = false;
  });
}

loadPresence();
connectPresenceSocket();
setupAmbient();
setupBoot();
setupRoad();
setupTimeline();
setupParticleIcons();
setupReveal();
setupTerminal();
setupContactForm();
setupSmoothScroll();
setupButtonRipples();
