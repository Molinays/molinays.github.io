const DISCORD_ID = '958753896346566696';
const byId = (id) => document.getElementById(id);

/* --- lingua: tutte le stringhe del sito vivono qui (it + en) --- */
const translations = {
  it: {
    'meta.description': 'Molinays — progetti, server, hardware e video editing.',
    'nav.label': 'Navigazione',
    'nav.projects': 'Progetti',
    'nav.journey': 'Percorso',
    'nav.beyond': 'Oltre il codice',
    'nav.contact': 'Contatti',
    'nav.menu': 'Apri menu',
    'nav.close': 'Chiudi menu',
    'hero.label': 'Presentazione',
    'hero.eyebrow': 'Full-stack developer ed editor',
    'hero.desc': 'Tra <b>codice, server e hardware</b>. 17 y/o Developer ed Editor, adoro usare i computer, quindi perché non farlo?.',
    'hero.cta': 'Esplora i progetti',
    'hero.scroll': 'SCORRI PER ESPLORARE',
    'hero.note': 'I progetti sono animati eh',
    'discord.label': 'Profilo Discord live tramite Lanyard',
    'discord.avatarAlt': 'Avatar Discord',
    'discord.connecting': 'Connessione',
    'discord.stateConnecting': 'Connessione a Lanyard',
    'discord.activityTitle': 'Presenza Discord',
    'discord.activitySub': 'Attività e musica, se condivise',
    'discord.cta': 'Contattami su Discord',
    'discord.open': 'APRI PROFILO ↗',
    'tech.label': 'Puoi chiamarmi per',
    'projects.label': 'Portfolio progetti',
    'projects.title': 'I miei progetti',
    'projects.prev': 'Progetto precedente',
    'projects.next': 'Progetto successivo',
    'projects.dots': 'Scegli progetto',
    'projects.goTo': 'Vai al progetto {n}',
    'projects.hint': 'SCORRI, TOCCA LE FRECCE O USA ↑ ↓',
    'project.1.desc1': 'Editing di video gaming long-form o contenuti verticali per YouTube, Instagram, TikTok.',
    'project.1.desc2': 'Se hai bisogno di un editor, contattami al più presto!',
    'project.1.link': 'Contattami adesso.',
    'project.1.cutLabel': 'TIMELINE / SEQUENZA · 24 FPS',
    'project.1.caption': 'RENDERIZZA IL MEGLIO',
    'project.2.desc1': 'Una toolbox per ottimizzare e personalizzare Windows: tweak reversibili con backup, privacy, servizi, pulizia memoria, scansione PC e oltre 120 app.',
    'project.2.desc2': 'Posso affermare che sia il miglior <b>Ram Cleaner</b> in circolazione.',
    'project.2.caption': 'Più FLUIDO / SYSTEM CONTROL',
    'project.3.desc': 'WebApp mirata sul downloading video, da qualsiasi sito, anche criptati. Con compressioni, fast cutting e velocità mai viste.',
    'project.4.desc': 'Il mio archivio personale di versioni modificate di app per esigenze specifiche. Un progetto privato, ospitato sul mio sito.',
    'project.5.desc': 'Il bot Discord tuttofare: ti serve un bot per qualsiasi cosa? Pingu è perfetto.',
    'project.5.link': 'Provalo ora',
    'project.5.caption': 'POWERFUL BOT / 05',
    'project.openRepo': 'Visita il sito ufficiale',
    'project.visitArchive': 'Visita MoliArchive',
    'journey.label': 'Percorso',
    'journey.index': '02 / PERCORSO',
    'journey.heading': 'Dalle mod su %appdata%<br><span>a un piccolo ecosistema.</span>',
    'journey.1.title': 'Modding e problem solving',
    'journey.1.text': 'Sono partito con un semplice microonde spacciato per computer, e da lì ho iniziato a sperimentare.',
    'journey.2.title': 'Strumenti miei',
    'journey.2.text': "MoliOptimizer e MoliDownloader: tool nati da un'esigenza reale e costruiti da zero.",
    'journey.3.title': 'La mia infrastruttura',
    'journey.3.text': 'VPS, SSH e self-hosting: i servizi girano su macchine che controllo io.',
    'journey.4.title': 'Adesso',
    'journey.4.text': 'Archivio personale, video editing e la prossima cosa da smontare.',
    'beyond.index': '03 / OLTRE IL CODICE',
    'beyond.heading': 'Mi piace capire come funziona.<br><span>Di solito, smontandolo.</span>',
    'beyond.1.text': 'Gestisco server Linux, lavoro in terminale e mi piace sapere cosa gira sotto al cofano.',
    'beyond.2.text': 'Servizi miei, server Minecraft e infrastruttura che controllo direttamente.',
    'beyond.3.text': 'Riparazioni, componenti, build e curiosità per tutto quello che è fatto di silicio.',
    'contact.index': '04 / CONTATTI',
    'contact.title': 'Hai un progetto, una build o un video?',
    'contact.desc': 'Scrivimi da qui: il messaggio arriva dritto a me. Oppure contattami su discord.',
    'contact.name': 'Nome',
    'contact.message': 'Messaggio',
    'contact.namePlaceholder': 'Come ti chiami',
    'contact.emailPlaceholder': 'nome@dominio.it',
    'contact.messagePlaceholder': 'Raccontami cosa hai in mente',
    'contact.send': 'Invia messaggio',
    'contact.mailSubject': 'Messaggio dal sito - {name}',
    'contact.newSubject': 'Nuovo messaggio dal sito - {name}',
    'contact.mailOpened': 'Apro il tuo client di posta con il messaggio già scritto.',
    'contact.checkFields': 'Controlla i campi evidenziati.',
    'contact.sent': 'Messaggio inviato.',
    'contact.notConnected': 'Form non ancora collegato: manca la chiave di invio. Scrivimi su Discord o GitHub.',
    'contact.sending': 'Invio in corso...',
    'contact.sentReply': 'Messaggio inviato. Ti rispondo il prima possibile.',
    'contact.tooMany': 'Troppi messaggi in poco tempo: riprova tra un minuto.',
    'contact.badData': 'Controlla i dati inseriti e riprova.',
    'contact.failed': 'Invio non riuscito, riprova tra poco.',
    'contact.network': 'Rete non raggiungibile: riprova o scrivimi su Discord.',
    'footer.copy': '© 2026 Molinays. Tutti i diritti riservati.',
    'footer.terminal': '[ apri terminale ]',
    'footer.top': 'TORNA SU ↑',
    'terminal.label': 'Terminale Arch interattivo',
    'terminal.close': 'Chiudi terminale',
    'terminal.input': 'Comando terminale',
    'terminal.intro2': 'Digita "help" per vedere i comandi.',
    'terminal.help.title': 'Comandi disponibili:',
    'terminal.help.help': 'help                 mostra i comandi',
    'terminal.help.whoami': 'whoami               presenta il profilo',
    'terminal.help.projects': 'projects             elenca i progetti',
    'terminal.help.themes': 'themes               elenca i temi disponibili',
    'terminal.help.theme': 'sudo theme <colore>  blue, green, purple, red, amber, yellow, pink, cyan, reset',
    'terminal.help.fix': 'fix                  ripara il sistema da eventuali glitch',
    'terminal.help.glitch': 'glitch               causa un errore di sistema',
    'terminal.help.clear': 'clear                pulisce il terminale',
    'terminal.help.exit': 'exit                 chiude il terminale',
    'terminal.whoami': 'Molinays — Full-Stack Developer, Server Admin e Video Editor. 17 anni, appassionato di tutto ciò che è smontabile.',
    'terminal.projects': 'MoliOptimizer (Windows) · MoliDownloader (WebApp) · MoliArchive (Privato) · Pingu (Bot Discord)',
    'terminal.themeDefault': 'Scaricando tema default...',
    'terminal.themeNotFound': 'Tema non trovato. Scegli: {list}',
    'terminal.themeDownloading': 'Scaricando tema {name}...',
    'terminal.commandNotFound': 'zsh: comando non trovato: {name} (prova "help")',
    'terminal.downloadingTheme': 'scaricando tema',
    'terminal.fixing': 'Ripristino integrità sistema...',
    'terminal.fixed': 'Sistema ripristinato con successo. Nessun errore rilevato.',
    'terminal.themes': 'Temi disponibili: blue, green, purple, red, amber, yellow, pink, cyan. Usa "sudo theme <colore>"',
    'presence.online': 'Online',
    'presence.idle': 'Inattivo',
    'presence.dnd': 'Non disturbare',
    'presence.offline': 'Offline',
    'presence.unavailable': 'Non disponibile',
    'presence.unreachable': 'Presenza non raggiungibile',
    'presence.listening': 'In ascolto',
    'presence.byArtist': 'di {artist}',
    'presence.activityDiscord': 'Attività Discord',
    'presence.activityOngoing': 'Attività in corso',
    'presence.noActivity': 'Nessuna attività condivisa',
    'presence.nothingNow': 'Niente al momento',
    'lang.switchToEnglish': "Passa all'inglese",
    'lang.switchToItalian': "Passa all'italiano",
    'lang.announce': 'Lingua: italiano'
  },
  en: {
    'meta.description': 'Molinays — projects, servers, hardware and video editing.',
    'nav.label': 'Navigation',
    'nav.projects': 'Projects',
    'nav.journey': 'Journey',
    'nav.beyond': 'Beyond code',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',
    'hero.label': 'Introduction',
    'hero.eyebrow': 'Full-stack developer and editor',
    'hero.desc': 'Somewhere between <b>code, servers and hardware</b>. 17 y/o developer and editor, I love using computers — so why not make it my thing?',
    'hero.cta': 'Explore the projects',
    'hero.scroll': 'SCROLL TO EXPLORE',
    'hero.note': 'The projects are animated, you know',
    'discord.label': 'Live Discord profile powered by Lanyard',
    'discord.avatarAlt': 'Discord avatar',
    'discord.connecting': 'Connecting',
    'discord.stateConnecting': 'Connecting to Lanyard',
    'discord.activityTitle': 'Discord presence',
    'discord.activitySub': 'Activity and music, when shared',
    'discord.cta': 'Reach me on Discord',
    'discord.open': 'OPEN PROFILE ↗',
    'tech.label': 'You can call me for',
    'projects.label': 'Project portfolio',
    'projects.title': 'My projects',
    'projects.prev': 'Previous project',
    'projects.next': 'Next project',
    'projects.dots': 'Choose a project',
    'projects.goTo': 'Go to project {n}',
    'projects.hint': 'SCROLL, TAP THE ARROWS OR USE ↑ ↓',
    'project.1.desc1': 'Editing long-form gaming videos or vertical content for YouTube, Instagram, TikTok.',
    'project.1.desc2': 'If you need an editor, get in touch as soon as you can!',
    'project.1.link': 'Contact me now.',
    'project.1.cutLabel': 'TIMELINE / SEQUENCE · 24 FPS',
    'project.1.caption': 'RENDER YOUR BEST',
    'project.2.desc1': 'A toolbox to optimize and customize Windows: reversible tweaks with backups, privacy, services, memory cleanup, PC scanning and 120+ apps.',
    'project.2.desc2': 'I can safely say it is the best <b>RAM cleaner</b> around.',
    'project.2.caption': 'SMOOTHER / SYSTEM CONTROL',
    'project.3.desc': 'WebApp targeted on video downloading, from any site, even encrypted. With compression, fast cutting and speed never seen before.',
    'project.4.desc': 'My personal archive of modified app versions for specific needs. A private project, hosted on my own site.',
    'project.5.desc': "The all-in-one Discord bot: need a bot for anything? Pingu is perfect.",
    'project.5.link': 'Try it now',
    'project.5.caption': 'POWERFUL BOT / 05',
    'project.openRepo': 'Visit the official website',
    'project.visitArchive': 'Visit MoliArchive',
    'journey.label': 'Journey',
    'journey.index': '02 / JOURNEY',
    'journey.heading': 'From mods in %appdata%<br><span>to a small ecosystem.</span>',
    'journey.1.title': 'Modding and problem solving',
    'journey.1.text': 'I started with a humble microwave pretending to be a computer, and that is where I began experimenting.',
    'journey.2.title': 'Tools of my own',
    'journey.2.text': 'MoliOptimizer and MoliDownloader: tools born from a real need and built from scratch.',
    'journey.3.title': 'My infrastructure',
    'journey.3.text': 'VPS, SSH and self-hosting: services run on machines I control.',
    'journey.4.title': 'Now',
    'journey.4.text': 'A personal archive, video editing and the next thing to take apart.',
    'beyond.index': '03 / BEYOND CODE',
    'beyond.heading': 'I like understanding how things work.<br><span>Usually by taking them apart.</span>',
    'beyond.1.text': 'I run Linux servers, work in the terminal and like knowing what runs under the hood.',
    'beyond.2.text': 'My own services, Minecraft servers and infrastructure I control directly.',
    'beyond.3.text': 'Repairs, components, builds and curiosity for everything made of silicon.',
    'contact.index': '04 / CONTACT',
    'contact.title': 'Got a project, a build or a video?',
    'contact.desc': 'Write to me here: your message comes straight to me. Or reach out on Discord.',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.namePlaceholder': "What's your name",
    'contact.emailPlaceholder': 'name@domain.com',
    'contact.messagePlaceholder': 'Tell me what you have in mind',
    'contact.send': 'Send message',
    'contact.mailSubject': 'Message from the site - {name}',
    'contact.newSubject': 'New message from the site - {name}',
    'contact.mailOpened': 'Opening your mail app with the message already written.',
    'contact.checkFields': 'Check the highlighted fields.',
    'contact.sent': 'Message sent.',
    'contact.notConnected': "The form isn't connected yet: the sending key is missing. Message me on Discord or GitHub.",
    'contact.sending': 'Sending...',
    'contact.sentReply': "Message sent. I'll reply as soon as I can.",
    'contact.tooMany': 'Too many messages in a short time: try again in a minute.',
    'contact.badData': 'Check the details you entered and try again.',
    'contact.failed': 'Sending failed, please try again soon.',
    'contact.network': 'Network unreachable: try again or message me on Discord.',
    'footer.copy': '© 2026 Molinays. All rights reserved.',
    'footer.terminal': '[ open terminal ]',
    'footer.top': 'BACK TO TOP ↑',
    'terminal.label': 'Interactive Arch terminal',
    'terminal.close': 'Close terminal',
    'terminal.input': 'Terminal command',
    'terminal.intro2': 'Type "help" to list the commands.',
    'terminal.help.title': 'Available commands:',
    'terminal.help.help': 'help                 show the commands',
    'terminal.help.whoami': 'whoami               introduce the profile',
    'terminal.help.projects': 'projects             list the projects',
    'terminal.help.themes': 'themes               list available themes',
    'terminal.help.theme': 'sudo theme <color>   blue, green, purple, red, amber, yellow, pink, cyan, reset',
    'terminal.help.fix': 'fix                  repair system from glitches',
    'terminal.help.glitch': 'glitch               cause a system error',
    'terminal.help.clear': 'clear                clear the terminal',
    'terminal.help.exit': 'exit                 close the terminal',
    'terminal.whoami': 'Molinays — Full-Stack Developer, Server Admin and Video Editor. 17 y/o, passionate about everything that can be taken apart.',
    'terminal.projects': 'MoliOptimizer (Windows) · MoliDownloader (WebApp) · MoliArchive (Private) · Pingu (Discord Bot)',
    'terminal.themeDefault': 'Downloading default theme...',
    'terminal.themeNotFound': 'Theme not found. Choose: {list}',
    'terminal.themeDownloading': 'Downloading {name} theme...',
    'terminal.commandNotFound': 'zsh: command not found: {name} (try "help")',
    'terminal.downloadingTheme': 'downloading theme',
    'terminal.fixing': 'Restoring system integrity...',
    'terminal.fixed': 'System successfully restored. No errors detected.',
    'terminal.themes': 'Available themes: blue, green, purple, red, amber, yellow, pink, cyan. Use "sudo theme <color>"',
    'presence.online': 'Online',
    'presence.idle': 'Idle',
    'presence.dnd': 'Do not disturb',
    'presence.offline': 'Offline',
    'presence.unavailable': 'Unavailable',
    'presence.unreachable': 'Presence unreachable',
    'presence.listening': 'Listening to',
    'presence.byArtist': 'by {artist}',
    'presence.activityDiscord': 'Discord activity',
    'presence.activityOngoing': 'Activity in progress',
    'presence.noActivity': 'No shared activity',
    'presence.nothingNow': 'Nothing right now',
    'lang.switchToEnglish': 'Switch to English',
    'lang.switchToItalian': 'Switch to Italian',
    'lang.announce': 'Language: English'
  }
};

const LANGUAGE_STORAGE_KEY = 'molinays-language';
const languageListeners = [];
let currentLanguage = 'it';
try {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage === 'it' || savedLanguage === 'en') currentLanguage = savedLanguage;
} catch {}

function t(key, vars) {
  const table = translations[currentLanguage] || translations.it;
  let value = table[key];
  if (value === undefined) value = translations.it[key];
  if (value === undefined) value = key;
  if (vars) {
    for (const [name, replacement] of Object.entries(vars)) value = value.split(`{${name}}`).join(String(replacement));
  }
  return value;
}

function onLanguageChange(listener) {
  languageListeners.push(listener);
}

function statusLabel(status) {
  return t(`presence.${status}` in translations.it ? `presence.${status}` : 'presence.offline');
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = t(element.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => { element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel)); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => { element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder)); });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => { element.setAttribute('alt', t(element.dataset.i18nAlt)); });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => { element.setAttribute('content', t(element.dataset.i18nContent)); });
  const toggle = byId('lang-toggle');
  if (toggle) {
    const next = currentLanguage === 'it' ? 'en' : 'it';
    byId('lang-current').textContent = currentLanguage.toUpperCase();
    byId('lang-next').textContent = next.toUpperCase();
    const label = t(next === 'en' ? 'lang.switchToEnglish' : 'lang.switchToItalian');
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
    toggle.dataset.lang = currentLanguage;
  }
}

function setLanguage(next) {
  currentLanguage = next === 'en' ? 'en' : 'it';
  try { localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage); } catch {}
  applyTranslations();
  languageListeners.forEach((listener) => { try { listener(currentLanguage); } catch {} });
}

function announceLanguage() {
  const live = byId('lang-status');
  if (live) live.textContent = t('lang.announce');
}

function setupLanguage() {
  applyTranslations();
  const toggle = byId('lang-toggle');
  if (!toggle) return;
  let swapping = false;
  toggle.addEventListener('click', () => {
    if (swapping) return;
    const next = currentLanguage === 'it' ? 'en' : 'it';
    swapping = true;
    toggle.disabled = true;
    toggle.classList.add('is-switching');
    playBootSequence({
      duration: 780,
      coverAt: 300,
      onCover: () => {
        setLanguage(next);
        announceLanguage();
      }
    }).then(() => {
      swapping = false;
      toggle.disabled = false;
      toggle.classList.remove('is-switching');
    });
  });
}

function playBootSequence({ duration = 780, coverAt = 300, onCover } = {}) {
  const boot = byId('boot');
  if (!boot) {
    if (onCover) onCover();
    return Promise.resolve();
  }
  const fill = byId('boot-fill');
  const readout = byId('boot-value');
  boot.style.animation = 'none';
  boot.style.transition = 'none';
  boot.classList.remove('is-done');
  fill.style.transform = 'scaleX(0)';
  readout.textContent = '000%';
  void boot.offsetWidth;
  boot.style.transition = '';
  return new Promise((resolve) => {
    const started = performance.now();
    let covered = false;
    let finished = false;
    const cover = () => {
      if (covered) return;
      covered = true;
      if (onCover) onCover();
    };
    const finish = () => {
      if (finished) return;
      finished = true;
      cover();
      boot.classList.add('is-done');
      resolve();
    };
    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      fill.style.transform = `scaleX(${progress})`;
      readout.textContent = `${String(Math.round(progress * 100)).padStart(3, '0')}%`;
      if (progress >= coverAt / duration) cover();
      if (progress < 1) requestAnimationFrame(tick);
      else finish();
    };
    requestAnimationFrame(tick);
    setTimeout(finish, duration + 700);
  });
}

let lastPresence = null;
let presenceFailed = false;

function markPresenceUnavailable() {
  presenceFailed = true;
  byId('presence-text').textContent = t('presence.unavailable');
  byId('discord-state').textContent = t('presence.unreachable');
  
  const presenceDot = byId('presence-dot');
  const avatarDot = byId('avatar-dot');
  
  if (presenceDot) presenceDot.className = 'presence-dot unavailable';
  if (avatarDot) avatarDot.className = 'avatar-dot unavailable';
}

const ACTIVITY_X_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg>';
const ACTIVITY_NOTE_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 17V6l9-2v11"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="15.5" cy="15.5" r="2.5"/></svg>';

function activityIconSources(activity) {
  if (!activity) return [];
  const assets = activity.assets || {};
  const appId = activity.application_id;
  const sources = [];
  for (const raw of [assets.large_image, assets.small_image]) {
    if (!raw || typeof raw !== 'string') continue;
    if (raw.startsWith('mp:external/')) {
      sources.push(`https://media.discordapp.net/external/${raw.slice('mp:external/'.length)}`);
    } else if (raw.startsWith('spotify:')) {
      sources.push(`https://i.scdn.co/image/${raw.slice('spotify:'.length)}`);
    } else if (appId) {
      sources.push(`https://cdn.discordapp.com/app-assets/${appId}/${raw}.png`);
    } else if (/^https?:\/\//.test(raw)) {
      sources.push(raw);
    }
  }
  if (appId) sources.push(`https://dcdn.dstn.to/app-icons/${appId}`);
  return [...new Set(sources)];
}

function setActivityIcon(iconEl, sources, fallback) {
  if (!iconEl) return;
  iconEl.replaceChildren();
  if (!sources.length) {
    iconEl.innerHTML = fallback;
    return;
  }
  const img = document.createElement('img');
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  let index = 0;
  img.addEventListener('error', () => {
    index += 1;
    if (index < sources.length) {
      img.src = sources[index];
      return;
    }
    img.remove();
    iconEl.innerHTML = fallback;
  });
  img.src = sources[0];
  iconEl.append(img);
}

function renderPresence(presence) {
  if (!presence?.discord_user) return;
  lastPresence = presence;
  presenceFailed = false;
  const user = presence.discord_user;
  const status = presence.discord_status || 'offline';
  const normalizedStatus = status === 'offline' ? 'offline' : status;
  
  byId('discord-name').textContent = user.global_name || user.username || 'Molinays';
  byId('discord-handle').textContent = `@${user.username || 'molinays'}`;
  byId('discord-state').textContent = statusLabel(normalizedStatus);
  byId('presence-text').textContent = statusLabel(normalizedStatus);
  
  const presenceDot = byId('presence-dot');
  const avatarDot = byId('avatar-dot');
  
  if (presenceDot) presenceDot.className = `presence-dot ${normalizedStatus}`;
  if (avatarDot) avatarDot.className = `avatar-dot ${normalizedStatus}`;

  if (user.avatar) {
    const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
    byId('discord-avatar').src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
  }

  const spotify = presence.spotify;
  const game = (presence.activities || []).find((activity) => activity.type !== 4 && activity.name !== 'Spotify');
  const iconEl = byId('activity-icon');

  if (spotify) {
    setActivityIcon(iconEl, spotify.album_art_url ? [spotify.album_art_url] : [], ACTIVITY_NOTE_ICON);
    byId('activity-title').textContent = spotify.song || 'Spotify';
    byId('activity-sub').textContent = spotify.artist ? t('presence.byArtist', {artist: spotify.artist}) : t('presence.listening');
  } else if (game) {
    setActivityIcon(iconEl, activityIconSources(game), ACTIVITY_X_ICON);
    byId('activity-title').textContent = game.name || t('presence.activityDiscord');
    byId('activity-sub').textContent = game.details || game.state || t('presence.activityOngoing');
  } else {
    setActivityIcon(iconEl, [], ACTIVITY_X_ICON);
    byId('activity-title').textContent = t('presence.noActivity');
    byId('activity-sub').textContent = t('presence.nothingNow');
  }
}

onLanguageChange(() => {
  if (lastPresence) renderPresence(lastPresence);
  else if (presenceFailed) markPresenceUnavailable();
});

async function loadPresence() {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    if (!response.ok) throw new Error('Lanyard non disponibile');
    const result = await response.json();
    if (result.success) renderPresence(result.data);
  } catch {
    markPresenceUnavailable();
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
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  let width = 0, height = 0, points = [];
  let dotColor = 'rgba(105,178,255,.7)';
  let lineRgb = { r: 52, g: 126, b: 239 };
  let frameId = 0;
  let lastTime = 0;

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
    const dpr = Math.min(devicePixelRatio || 1, 1.25);
    width = innerWidth; height = innerHeight;
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = Math.min(48, Math.round(width * height / 24000));
    points = Array.from({length:count}, () => ({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.34,vy:(Math.random()-.5)*.34,r:Math.random()*1.5+.4}));
  }
  function draw(now) {
    if (!lastTime) lastTime = now;
    const delta = Math.min(64, now - lastTime);
    lastTime = now;
    const step = Math.min(2, delta / 16.7);
    ctx.clearRect(0,0,width,height);
    for (const p of points) {
      p.x += p.vx * step; p.y += p.vy * step;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=dotColor; ctx.fill();
    }
    const maxDistSq = 135 * 135;
    for (let i=0;i<points.length;i++) for (let j=i+1;j<points.length;j++) {
      const dx=points[i].x-points[j].x,dy=points[i].y-points[j].y;
      const dSq = dx*dx + dy*dy;
      if (dSq < maxDistSq) {
        const d = Math.sqrt(dSq);
        ctx.beginPath();ctx.moveTo(points[i].x,points[i].y);ctx.lineTo(points[j].x,points[j].y);
        ctx.strokeStyle=`rgba(${lineRgb.r},${lineRgb.g},${lineRgb.b},${(1-d/135)*.23})`;ctx.lineWidth=.8;ctx.stroke();
      }
    }
    frameId = requestAnimationFrame(draw);
  }
  function start() {
    if (!frameId) {
      lastTime = 0;
      frameId = requestAnimationFrame(draw);
    }
  }
  function stop() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
  }
  addEventListener('resize', resize, {passive:true});
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });
  resize(); start();
}

function setupRoad() {
  const road = document.querySelector('.road');
  if (!road) return;
  const stage = road.querySelector('.road-stage');
  const cards = [...road.querySelectorAll('.road-card')];
  const counter = byId('road-count');
  const controls = document.querySelector('.road-controls');
  const dotsWrap = byId('road-dots');
  const prevButton = byId('road-prev');
  const nextButton = byId('road-next');
  const total = cards.length;
  byId('road-total').textContent = String(total).padStart(2, '0');

  const jumpers = cards.map((card, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'road-jump';
    button.textContent = String(i + 1).padStart(2, '0');
    button.addEventListener('click', () => scrollToIndex(i));
    dotsWrap.append(button);
    return button;
  });
  const labelJumps = () => jumpers.forEach((button, i) => button.setAttribute('aria-label', t('projects.goTo', { n: String(i + 1).padStart(2, '0') })));
  labelJumps();
  onLanguageChange(labelJumps);

  const states = cards.map(() => null);
  const cardStates = cards.map(() => ({ y: '', scale: '', opacity: '', order: '', pointer: '' }));
  const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);
  let index = 0;
  let position = 0;
  let target = 0;
  let tweenId = 0;
  let stageHeight = innerHeight;
  let heights = [];
  let cardStep = 30;
  let scrollStep = 0;
  let lastCounter = '';
  let lastActive = -1;

  function measure() {
    stageHeight = stage.offsetHeight || innerHeight;
    heights = cards.map((card) => card.offsetHeight || 440);
    cardStep = Math.max(22, Math.min(46, stageHeight * .048));
    scrollStep = Math.max(380, Math.min(Math.round(innerHeight * .85), 760));
    road.style.height = `${Math.round(stageHeight + scrollStep * (total - 1))}px`;
  }

  function render(force) {
    const focusY = stageHeight * .58;
    const baseHeight = Math.max(...heights, 440);
    const active = Math.max(0, Math.min(total - 1, Math.round(position)));
    for (let i = 0; i < total; i++) {
      const card = cards[i];
      const state = cardStates[i];
      const offset = i - position;
      const ahead = Math.max(0, offset);
      const behind = Math.max(0, -offset);
      const height = heights[i] || baseHeight;
      const scale = offset >= 0 ? Math.max(.5, Math.pow(.9, ahead)) : 1 - Math.min(1.2, behind) * .06;
      const shift = offset >= 0 ? -ahead * cardStep : Math.min(1.2, behind) * 110;
      const distance = Math.abs(offset);
      const opacity = offset >= 0
        ? Math.max(.3, Math.pow(.82, Math.max(0, ahead - .45)))
        : Math.max(0, 1 - Math.pow(behind, 2) * 1.6);
      const center = focusY + shift;
      const reachable = i === active;
      const y = `${(center - height / 2).toFixed(1)}px`;
      const scaleStr = scale.toFixed(3);
      const opacityStr = opacity.toFixed(3);
      const orderStr = String(Math.max(1, 120 - Math.round(distance * 12)));
      const pointer = reachable ? 'auto' : 'none';
      if (force || state.y !== y) { state.y = y; card.style.setProperty('--card-y', y); }
      if (force || state.scale !== scaleStr) { state.scale = scaleStr; card.style.setProperty('--card-scale', scaleStr); }
      if (force || state.opacity !== opacityStr) { state.opacity = opacityStr; card.style.setProperty('--card-opacity', opacityStr); }
      if (force || state.order !== orderStr) { state.order = orderStr; card.style.setProperty('--card-order', orderStr); }
      if (force || state.pointer !== pointer) { state.pointer = pointer; card.style.setProperty('--card-pointer', pointer); }
      if (states[i] !== reachable) {
        states[i] = reachable;
        card.inert = !reachable;
        card.setAttribute('aria-hidden', String(!reachable));
      }
    }
    const countText = String(active + 1).padStart(2, '0');
    if (countText !== lastCounter) {
      lastCounter = countText;
      counter.textContent = countText;
    }
    if (active !== lastActive) {
      lastActive = active;
      jumpers.forEach((button, i) => {
        button.classList.toggle('is-active', i === active);
        button.setAttribute('aria-current', i === active ? 'true' : 'false');
      });
      prevButton.disabled = active === 0;
      nextButton.disabled = active === total - 1;
    }
    controls.classList.remove('is-busy');
    index = active;
  }

  function tweenTo(next) {
    if (tweenId) {
      cancelAnimationFrame(tweenId);
      tweenId = 0;
    }
    const from = position;
    const duration = Math.max(320, Math.min(550, 300 + Math.abs(next - from) * 150));
    const started = performance.now();
    const frame = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      position = from + (next - from) * easeOutCubic(progress);
      render(false);
      if (progress < 1) {
        tweenId = requestAnimationFrame(frame);
        return;
      }
      position = next;
      tweenId = 0;
      render(true);
    };
    tweenId = requestAnimationFrame(frame);
  }

  function update(force) {
    if (document.body.classList.contains('is-glitched')) return;
    const rect = road.getBoundingClientRect();
    const scrollable = Math.max(1, road.offsetHeight - stageHeight);
    const raw = Math.max(0, Math.min(1, -rect.top / scrollable)) * (total - 1);
    const desired = Math.max(0, Math.min(total - 1, Math.round(raw)));
    if (force) {
      if (tweenId) {
        cancelAnimationFrame(tweenId);
        tweenId = 0;
      }
      target = desired;
      position = desired;
      render(true);
      return;
    }
    if (desired !== target && Math.abs(raw - position) >= .58) {
      target = desired;
      tweenTo(target);
    }
  }

  function scrollToIndex(next) {
    if (document.body.classList.contains('is-glitched')) return;
    const clamped = Math.max(0, Math.min(total - 1, next));
    const ratio = total > 1 ? clamped / (total - 1) : 0;
    const scrollable = Math.max(1, road.offsetHeight - stageHeight);
    const top = road.getBoundingClientRect().top + scrollY + ratio * scrollable;
    window.dispatchEvent(new CustomEvent('custom-scroll-to', { detail: { top } }));
  }

  prevButton.addEventListener('click', () => scrollToIndex(index - 1));
  nextButton.addEventListener('click', () => scrollToIndex(index + 1));

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update(false);
    });
  }, { passive: true });
  addEventListener('resize', () => { measure(); update(true); }, { passive: true });
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => { measure(); update(true); });
    observer.observe(stage);
    cards.forEach((card) => observer.observe(card));
  }
  if (document.fonts?.ready) document.fonts.ready.then(() => { measure(); update(true); });
  addEventListener('load', () => { measure(); update(true); }, { once: true });
  measure();
  update(true);
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
    let isGlitchCanvas = canvas.id === 'glitch-canvas';
    let glitchStarted = false;

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
      const share = .75;
      const formingCount = Math.max(1, Math.round(particles.length * share));
      const free = [];
      const stride = particles.length / formingCount;
      for (let i = 0; i < formingCount; i++) free.push(particles[Math.floor(i * stride)]);
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
          startAt: 0,
          vx: 0,
          vy: 0
        };
      });
      if (hovered) assignTargets();
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
      const step = Math.min(1.5, delta / 16.7);
      const formGain = 1 - Math.pow(1 - .05, step);
      const driftGain = 1 - Math.pow(1 - .012, step);
      
      const isGlitched = document.body.classList.contains('is-glitched') && isGlitchCanvas;
      
      if (isGlitched && !glitchStarted) {
        glitchStarted = true;
        particles.forEach(p => {
          p.target = null;
          p.vx = (Math.random() - 0.5) * 3;
          p.vy = Math.random() * 2;
        });
      } else if (!isGlitched) {
        glitchStarted = false;
      }

      if (visible && width && height) {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = particleColor;
        for (const particle of particles) {
          const forming = hovered && particle.target && time >= particle.startAt && !isGlitched;
          
          if (isGlitched) {
            particle.vy += 0.25 * step;
            particle.x += particle.vx * step;
            particle.y += particle.vy * step;
            
            if (particle.x < 0 || particle.x > width) {
              particle.vx *= -1;
              particle.x = Math.max(0, Math.min(width, particle.x));
            }
            
            if (particle.y > height - 15) {
              particle.y = height - 15;
              particle.vy = 0;
              particle.vx *= 0.8;
            }
          } else if (forming) {
            if (particle.settled) {
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
          
          ctx.globalAlpha = forming ? .95 : (isGlitched ? 1 : .38);
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
  if(!dialog)return;
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
    setTimeout(apply,420);
    setTimeout(()=>wave.remove(),1450);
  }
  function runThemeDownload(label,done){
    const popup=document.createElement('div');
    popup.className='theme-download';
    popup.innerHTML=`<div class="theme-download-head"><i></i><span>${t('terminal.downloadingTheme')} <b></b></span><em>0%</em></div><div class="theme-download-bar"><i></i></div><div class="theme-download-meta">theme-pack / <b></b> · 1.2 kb</div>`;
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
    if(!output.childElementCount){print('molios shell [Arch Linux]');print(t('terminal.intro2'));}
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
  
  function commandHelp(){
    print(t('terminal.help.title'));
    print(t('terminal.help.help'));
    print(t('terminal.help.whoami'));
    print(t('terminal.help.projects'));
    print(t('terminal.help.themes'));
    print(t('terminal.help.theme'));
    print(t('terminal.help.fix'));
    print(t('terminal.help.glitch'));
    print(t('terminal.help.clear'));
    print(t('terminal.help.exit'));
  }

  function triggerGlitch() {
    document.body.classList.add('is-glitched');
    
    const topStatusText = byId('top-status-text');
    const topStatusDot = byId('top-status-dot');
    if(topStatusText) topStatusText.textContent = 'STATUS : ERROR';
    if(topStatusDot) {
      topStatusDot.className = '';
      topStatusDot.style.background = '#ff4d5e';
      topStatusDot.style.boxShadow = '0 0 13px #ff4d5e';
    }

    if(!document.getElementById('glitch-overlay')) {
      const overlay = document.createElement('div');
      overlay.id = 'glitch-overlay';
      overlay.className = 'glitch-overlay';
      document.body.appendChild(overlay);
    }
    
    const alertBox = byId('glitch-alert');
    if (alertBox) {
      alertBox.classList.add('is-visible');
    }

    const themes = ['red', 'green', 'purple', 'amber'];
    let themeIndex = 0;
    const themeInt = setInterval(() => {
      if (!document.body.classList.contains('is-glitched')) {
        clearInterval(themeInt);
        return;
      }
      document.documentElement.style.setProperty('--blue', ['#e64b59', '#20bd70', '#925cff', '#d6921e'][themeIndex % 4]);
      document.documentElement.style.setProperty('--blue2', ['#ff9b9b', '#83f3a5', '#d0aaff', '#ffd36f'][themeIndex % 4]);
      themeIndex++;
    }, 800);

    const emailInput = byId('contact-message');
    if (emailInput) {
      emailInput.value = '';
      const bugText = "ERRORE_SISTEMA_CRITICO_0x0000F4\nImpossibile inviare il messaggio.\nRiprova più tardi o contatta l'amministratore di sistema.\n\n";
      let charIdx = 0;
      const typeInt = setInterval(() => {
        if (!document.body.classList.contains('is-glitched')) {
          clearInterval(typeInt);
          return;
        }
        emailInput.value = bugText.substring(0, charIdx) + Array.from({length: Math.random() * 5 | 0}, () => String.fromCharCode(33 + Math.random() * 90 | 0)).join('');
        charIdx += 2;
        if (charIdx > bugText.length + 20) charIdx = 0;
      }, 100);

      emailInput.addEventListener('keydown', (e) => {
        if (document.body.classList.contains('is-glitched') && e.key !== 'Tab') {
          e.preventDefault();
        }
      });
    }
  }

  function fixSystem() {
    const restoreOverlay = document.createElement('div');
    restoreOverlay.className = 'restore-system';
    restoreOverlay.innerHTML = `
      <div class="restore-header">
        <span>SYSTEM_RESTORE_UTILITY_v4.0</span>
        <span class="blink">_</span>
      </div>
      <div class="restore-log" id="restore-log"></div>
      <div class="restore-progress"><div class="restore-progress-bar" id="restore-progress-bar"></div></div>
    `;
    document.body.appendChild(restoreOverlay);
    
    window.scrollTo(0, 0);
    
    void restoreOverlay.offsetWidth;
    restoreOverlay.classList.add('is-active');

    document.body.classList.remove('is-glitched');
    
    const logContainer = byId('restore-log');
    const progressBar = byId('restore-progress-bar');
    
    const logs = [
      "Inizializzazione protocollo di ripristino...",
      "Analisi dell'integrità della memoria... [FAILED]",
      "Trovati 14 settori corrotti.",
      "Ripristino moduli di sistema...",
      "-> kernel_panic.sys [OK]",
      "-> glitch_daemon.exe [OK]",
      "-> timeline_render.dll [OK]",
      "-> discord_overlay.dll [OK]",
      "-> particle_engine.dll [OK]",
      "Ricostruzione delle texture in corso...",
      "Riavvio dei processi in background...",
      "Sincronizzazione dati completata.",
      "RIPRISTINO COMPLETATO CON SUCCESSO."
    ];

    let logIndex = 0;
    let progress = 0;
    
    const logInterval = setInterval(() => {
      if (logIndex < logs.length) {
        const p = document.createElement('p');
        p.className = 'restore-line';
        if (logs[logIndex].includes('[FAILED]')) p.classList.add('err');
        else if (logs[logIndex].includes('[OK]')) p.classList.add('ok');
        p.textContent = `> ${logs[logIndex]}`;
        logContainer.appendChild(p);
        logContainer.scrollTop = logContainer.scrollHeight;
        logIndex++;
        progress = (logIndex / logs.length) * 100;
        progressBar.style.width = `${progress}%`;
      } else {
        clearInterval(logInterval);
        
        setTimeout(() => {
          const topStatusText = byId('top-status-text');
          const topStatusDot = byId('top-status-dot');
          if(topStatusText) topStatusText.textContent = 'STATUS : ONLINE';
          if(topStatusDot) {
            topStatusDot.className = 'online';
            topStatusDot.style.background = '';
            topStatusDot.style.boxShadow = '';
          }

          const alertBox = byId('glitch-alert');
          if (alertBox) alertBox.classList.remove('is-visible');

          const overlay = document.getElementById('glitch-overlay');
          if (overlay) overlay.remove();
          
          applyTheme(null, true);

          const emailInput = byId('contact-message');
          if (emailInput) emailInput.value = '';
          
          window.dispatchEvent(new Event('resize'));

          restoreOverlay.classList.remove('is-active');
          setTimeout(() => restoreOverlay.remove(), 400);

          print(t('terminal.fixed'), 'success');
        }, 800);
      }
    }, 200);
  }

  function run(raw){
    const command=raw.trim();
    if(!command)return;
    print(`root@molios ~ $ ${command}`,'command');
    const args=command.toLowerCase().split(/\s+/);
    
    if(args[0]==='help'||args[0]==='man') commandHelp();
    else if(args[0]==='whoami') print(t('terminal.whoami'));
    else if(args[0]==='projects') print(t('terminal.projects'));
    else if(args[0]==='themes') print(t('terminal.themes'));
    else if(args[0]==='fix') {
      print(t('terminal.fixing'));
      closeTerminal();
      setTimeout(fixSystem, 400);
    }
    else if(args[0]==='glitch') {
      print('Kernel panic - not syncing: Fatal exception', 'error');
      setTimeout(triggerGlitch, 200);
    }
    else if(args[0]==='clear') output.replaceChildren();
    else if(args[0]==='exit') closeTerminal();
    else if(args[0]==='sudo'&&args[1]==='theme'){
      const color=args[2];
      if(color==='reset'){
        print(t('terminal.themeDefault'),'success');
        setTimeout(()=>{closeTerminal();setTimeout(()=>{
          runThemeWave(initialTheme[1],initialTheme[0],()=>applyTheme(null,true));
          runThemeDownload('default',()=>{});
        },240);},380);
        return;
      }
      if(!colors[color]){print(t('terminal.themeNotFound',{list:`${Object.keys(colors).join(', ')}, reset`}),'error');return;}
      print(t('terminal.themeDownloading',{name:color}),'success');
      setTimeout(()=>{closeTerminal();setTimeout(()=>{
        runThemeWave(colors[color][1],colors[color][0],()=>applyTheme(color));
        runThemeDownload(color,()=>{});
      },240);},380);
    } else print(t('terminal.commandNotFound',{name:args[0]}),'error');
  }
  
  byId('terminal-launch').addEventListener('click',openTerminal);
  byId('terminal-close').addEventListener('click',closeTerminal);
  dialog.addEventListener('click',event=>{if(event.target===dialog)closeTerminal();});
  dialog.addEventListener('cancel',event=>{event.preventDefault();closeTerminal();});
  dialog.addEventListener('keydown',event=>{
    if(event.ctrlKey&&event.key.toLowerCase()==='c'){event.preventDefault();closeTerminal();}
  });
  form.addEventListener('submit',event=>{event.preventDefault();run(input.value);input.value='';});

  const glitchTrigger = byId('glitch-trigger');
  if (glitchTrigger) {
    glitchTrigger.addEventListener('click', () => {
      triggerGlitch();
    });
  }

  const alertClose = byId('glitch-alert-close');
  if(alertClose) {
    alertClose.addEventListener('click', () => {
      byId('glitch-alert').classList.remove('is-visible');
    });
  }

  const alertOpenTerminal = byId('glitch-open-terminal');
  if(alertOpenTerminal) {
    alertOpenTerminal.addEventListener('click', () => {
      byId('glitch-alert').classList.remove('is-visible');
      openTerminal();
    });
  }
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

  window.addEventListener('custom-scroll-to', (e) => {
    scrollToY(e.detail.top);
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    if (!hash || hash.length < 2) return;
    const target = document.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, '', hash);
    
    const contact = document.querySelector('#contatti');
    
    if (contact && (hash === '#contatti' || hash === '#top')) {
      const fade = document.createElement('div');
      fade.className = 'fade-transition';
      document.body.appendChild(fade);
      
      requestAnimationFrame(() => {
        fade.classList.add('is-active');
      });
      
      setTimeout(() => {
        scrollTo(0, hash === '#contatti' ? Math.round(contact.getBoundingClientRect().top + scrollY) : 0);
        
        setTimeout(() => {
          fade.classList.remove('is-active');
          setTimeout(() => fade.remove(), 400);
        }, 50);
      }, 350);
      
      return;
    }

    scrollToY(Math.round(target.getBoundingClientRect().top + scrollY));
  });
}

function setupButtonRipples() {
  const selector = '.button, .project-link, .road-nav, .road-jump, .contact-links a, .contact-send, .footer button, .glitch-action-btn';
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
  let lastShown = -1;

  function paint() {
    frameId = 0;
    const diff = target - shown;
    if (Math.abs(diff) < .002) {
      shown = target;
    } else {
      shown += diff * .15;
    }
    if (Math.abs(shown - lastShown) > .001) {
      lastShown = shown;
      timeline.style.setProperty('--timeline-progress', shown.toFixed(4));
      const reached = shown * items.length;
      items.forEach((item, index) => item.classList.toggle('is-on', reached > index + .45));
    }
    if (shown !== target) frameId = requestAnimationFrame(paint);
  }

  function update() {
    if (document.body.classList.contains('is-glitched')) return;
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

  let statusKey = '';
  let statusVars = null;
  let statusType = '';
  function say(keyName = '', type = '', vars = null) {
    statusKey = keyName;
    statusVars = vars;
    statusType = type;
    status.textContent = keyName ? t(keyName, vars) : '';
    status.classList.toggle('is-ok', type === 'ok');
    status.classList.toggle('is-error', type === 'error');
  }
  onLanguageChange(() => {
    if (statusKey) status.textContent = t(statusKey, statusVars);
  });

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
    const subject = encodeURIComponent(t('contact.mailSubject', {name: data.name}));
    const body = encodeURIComponent(`${data.message}\n\n- ${data.name} (${data.email})`);
    location.href = `mailto:${fallback}?subject=${subject}&body=${body}`;
    say('contact.mailOpened', 'ok');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (document.body.classList.contains('is-glitched')) return;
    if (!validate()) {
      say('contact.checkFields', 'error');
      return;
    }
    const data = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim()
    };
    if (form.elements.botcheck?.checked) {
      say('contact.sent', 'ok');
      return;
    }
    if (!key) {
      if (fallback) {
        sendByMail(data);
        return;
      }
      say('contact.notConnected', 'error');
      return;
    }
    button.disabled = true;
    say('contact.sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: t('contact.newSubject', {name: data.name}),
          from_name: 'Molinays portfolio',
          name: data.name,
          email: data.email,
          message: data.message
        })
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        form.reset();
        say('contact.sentReply', 'ok');
      } else if (response.status === 429) {
        say('contact.tooMany', 'error');
      } else if (response.status === 400 || response.status === 422) {
        say('contact.badData', 'error');
      } else {
        say('contact.failed', 'error');
      }
    } catch {
      say('contact.network', 'error');
    }
    button.disabled = false;
  });
}

const TYPED_PHRASES = {
  it: [
    'backend developer.',
    'frontend developer.',
    'video editor.',
    'techician.',
    'hardware expert.'
  ],
  en: [
    'backend developer.',
    'frontend developer.',
    'video editor.',
    'techician.',
    'hardware expert.'
  ]
};

function setupTyping() {
  const el = byId('typed');
  if (!el) return;
  let timer = 0;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function step() {
    const phrases = TYPED_PHRASES[currentLanguage] || TYPED_PHRASES.it;
    const phrase = phrases[phraseIndex % phrases.length];

    if (!deleting) {
      charIndex += 1;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex >= phrase.length) {
        deleting = true;
        timer = setTimeout(step, 2000);
        return;
      }
    } else {
      charIndex -= 1;
      el.textContent = phrase.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    timer = setTimeout(step, deleting ? 40 : 70);
  }

  function restart() {
    clearTimeout(timer);
    phraseIndex = 0;
    charIndex = 0;
    deleting = false;
    el.textContent = '';
    step();
  }

  restart();
  onLanguageChange(restart);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearTimeout(timer);
    else restart();
  });
}

function setupMobileNav() {
  const toggle = byId('nav-toggle');
  const menu = byId('mobile-menu');
  if (!toggle || !menu) return;
  let open = false;
  const setOpen = (next, focusToggle = false) => {
    open = next;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.menu'));
    menu.hidden = !open;
    if (!open && focusToggle) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(!open));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && open) setOpen(false, true);
  });
  window.addEventListener('scroll', () => {
    if (open && window.scrollY > 24) setOpen(false);
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (open && window.innerWidth > 760) setOpen(false);
  }, { passive: true });
  onLanguageChange(() => setOpen(open));
  setOpen(false);
}

setupLanguage();
setupMobileNav();
setupTyping();
loadPresence();
connectPresenceSocket();
setupAmbient();
setupBoot();
setupTimeline();
setupParticleIcons();
setupReveal();
setupTerminal();
setupContactForm();
setupSmoothScroll();
setupButtonRipples();