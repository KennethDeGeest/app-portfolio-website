const apps = {
  treeidentifier: {
    title: "Tree, Leaf & Wood Identifier",
    kicker: "Private nature discoveries",
    description: "Identify trees, plants, leaves, bark, and wood from a photo, ask follow-up questions, and build a private map of what you find.",
    ideaTitle: "Turn a passing find into something you know.",
    idea: "A curious moment outdoors should not end with a name. Each photo becomes a useful discovery with recognition clues, follow-up questions, personal notes, and a place in a private field collection.",
    features: [
      ["Identify more than leaves", "Use photos of whole trees, leaves, flowers, bark, grain, or cut wood, then add closer views to improve the discovery."],
      ["Keep exploring with AI", "Ask questions from each result and keep useful answers alongside the species, recognition details, and source material."],
      ["Build a private field record", "Search and filter saved finds, mark favorites, add notes, and explore hundreds of private pins on a clustered map."]
    ],
    screenshots: [
      ["assets/screens/treeidentifier-home.png", "Tree, Leaf and Wood Identifier home with a populated collection and private map"],
      ["assets/screens/treeidentifier-map.png", "Private discovery map with 257 clustered pins across 14 countries"],
      ["assets/screens/treeidentifier-discovery.png", "Detailed Scots pine discovery with identification details and follow-up photo options"]
    ],
    note: "AI-assisted identifications are suggestions, not professional safety advice. Collections, notes, and precise pins stay on the user’s iPhone.",
    icon: "assets/treeidentifier.png",
    store: null,
    privacy: "apps/treeidentifier/privacy.html",
    terms: "apps/treeidentifier/terms.html",
    support: "mailto:degeestkenneth@gmail.com?subject=Tree%2C%20Leaf%20%26%20Wood%20Identifier%20Support"
  },
  tiphaven: {
    title: "TipHaven",
    kicker: "Tips, shifts & earnings",
    description: "A private shift tracker that turns tips, wages, hours, and tip-outs into a clear picture of what your time is worth.",
    ideaTitle: "Know which shifts truly pay off.",
    idea: "Hospitality workers often remember the cash in their pocket, but not the full value of a shift. TipHaven brings every part of the working day together so earnings, patterns, and progress are easy to understand.",
    features: [
      ["Capture the full shift", "Log hours, wages, cash and card tips, sales, and tip-outs in one quick flow."],
      ["See the real hourly value", "Automatically calculate total earnings and effective hourly pay across shifts, roles, and workplaces."],
      ["Find useful patterns", "Review trends and comparisons without turning personal work records into a public profile."]
    ],
    screenshots: [
      ["assets/screens/tiphaven-today.png", "TipHaven today view with weekly earnings"],
      ["assets/screens/tiphaven-shift.png", "TipHaven shift entry flow"],
      ["assets/screens/tiphaven-insights.png", "TipHaven earnings insights"]
    ],
    note: "No account required. Shift and earnings details stay on the user’s iPhone.",
    icon: "assets/tiphaven.png",
    store: "https://apps.apple.com/app/id6805177188",
    privacy: "apps/tiphaven/privacy.html",
    terms: "apps/tiphaven/terms.html",
    support: "mailto:degeestkenneth@gmail.com?subject=TipHaven%20Support"
  },
  bulkbro: {
    title: "BulkBro",
    kicker: "Adaptive weight-gain coach",
    description: "An evidence-based calorie and weight coach that helps hardgainers replace guesswork with a plan that adapts to real progress.",
    ideaTitle: "A bulking plan that learns from results.",
    idea: "Eating more is simple advice, but knowing whether it is enough is harder. BulkBro connects meal logging, weigh-ins, and completed weeks to explain what is happening and adjust the next target with context.",
    features: [
      ["Log without friction", "Capture meals with quick inputs and editable estimates while keeping the final numbers under the user’s control."],
      ["Adapt from completed weeks", "Compare confirmed intake with weight response and goal pace before suggesting a calorie adjustment."],
      ["Explain the recommendation", "Show why a target changed—or stayed the same—so the plan remains understandable rather than mysterious."]
    ],
    screenshots: [
      ["assets/screens/bulkbro-today.png", "BulkBro daily calorie plan"],
      ["assets/screens/bulkbro-log.png", "BulkBro meal logging screen"],
      ["assets/screens/bulkbro-progress.png", "BulkBro progress and weight trend"]
    ],
    note: "Built for intentional weight gain. BulkBro is not medical advice or a replacement for professional care.",
    icon: "assets/bulkbro.png",
    store: "https://apps.apple.com/app/id6770476671",
    privacy: "apps/bulkbro/privacy.html",
    terms: "apps/bulkbro/terms.html",
    health: "apps/bulkbro/health.html",
    support: "mailto:degeestkenneth@gmail.com?subject=Bulk%20Tracker%20Support"
  },
  migraloom: {
    title: "MigraLoom",
    kicker: "Private migraine journal",
    description: "A calm, private migraine journal for capturing episodes, understanding recorded patterns, and preparing clearer conversations with healthcare professionals.",
    ideaTitle: "Remember less. Bring a clearer record.",
    idea: "Migraine days make detailed note-taking difficult, and important context is easy to forget later. MigraLoom makes the first entry fast, then lets users add detail when they are ready and turn the record into something useful.",
    features: [
      ["Record an episode quickly", "Start with timing and intensity, then add symptoms, pain location, medication, and notes when it feels manageable."],
      ["See only recorded patterns", "Summarize frequency, duration, intensity, and recurring context without presenting guesses as medical conclusions."],
      ["Prepare for appointments", "Create a structured visit summary and export a PDF only when the user chooses to share it." ]
    ],
    screenshots: [
      ["assets/screens/migraloom-home.png", "MigraLoom home and episode overview"],
      ["assets/screens/migraloom-patterns.png", "MigraLoom recorded patterns"],
      ["assets/screens/migraloom-visit.png", "MigraLoom visit summary"]
    ],
    note: "No MigraLoom account required. Journal and health details remain stored on the user’s iPhone.",
    icon: "assets/migraloom.png",
    store: "https://apps.apple.com/app/id6811065580",
    privacy: "apps/migraloom/privacy.html",
    terms: "apps/migraloom/terms.html",
    support: "mailto:degeestkenneth@gmail.com?subject=MigraLoom%20Support"
  },
  bumpecho: {
    title: "Bump Echo",
    kicker: "Pregnancy audio keepsakes",
    description: "A private Soundbook for capturing messages, songs, voices, and quiet moments throughout pregnancy.",
    ideaTitle: "Keep the sounds of this chapter.",
    idea: "Pregnancy is filled with small moments that photographs cannot hold. Bump Echo gives expecting families a gentle place to record those voices and sounds, add the story behind them, and replay the memories later.",
    features: [
      ["Capture a meaningful moment", "Record a message, song, loved one’s voice, or ordinary sound with the iPhone microphone."],
      ["Build a private Soundbook", "Add titles and notes, favorite special recordings, search the collection, and replay memories anytime."],
      ["Share only when you choose", "Recordings stay on the device unless the user deliberately exports one through the iOS share sheet."]
    ],
    screenshots: [
      ["assets/screens/bumpecho-home.png", "Bump Echo family Soundbook home"],
      ["assets/screens/bumpecho-soundbook.png", "Bump Echo populated audio memory collection"],
      ["assets/screens/bumpecho-settings.png", "Bump Echo family and privacy settings"]
    ],
    note: "An audio keepsake—not a fetal-heartbeat recorder or medical monitor. Recordings and personal notes stay on the user’s iPhone.",
    icon: "assets/bumpecho.png",
    store: null,
    privacy: "apps/bumpecho/privacy.html",
    terms: "apps/bumpecho/terms.html",
    support: "mailto:degeestkenneth@gmail.com?subject=Bump%20Echo%20Support"
  }
};

const dialog = document.querySelector("#app-dialog");
const closeButton = dialog.querySelector(".dialog-close");
const contactDialog = document.querySelector("#contact-dialog");
const contactTrigger = document.querySelector(".contact-trigger");
const contactCloseButton = contactDialog.querySelector(".dialog-close");
const appCaseView = document.querySelector("#app-case-view");
const legalView = document.querySelector("#legal-view");
const legalDocument = document.querySelector("#legal-document");
const legalBack = document.querySelector("#legal-back");
const dialogSupport = document.querySelector("#dialog-support");
let currentAppId = null;

function openApp(id, updateHash = true) {
  const app = apps[id];
  if (!app) return;
  currentAppId = id;
  appCaseView.hidden = false;
  legalView.hidden = true;
  document.querySelector("#dialog-icon").src = app.icon;
  document.querySelector("#dialog-icon").alt = `${app.title} app icon`;
  document.querySelector("#dialog-kicker").textContent = app.kicker;
  document.querySelector("#dialog-title").textContent = app.title;
  document.querySelector("#dialog-description").textContent = app.description;
  document.querySelector("#dialog-idea-title").textContent = app.ideaTitle;
  document.querySelector("#dialog-idea").textContent = app.idea;
  document.querySelector("#dialog-note").textContent = app.note;
  document.querySelector("#dialog-features").replaceChildren(...app.features.map(([title, detail]) => {
    const item = document.createElement("li");
    const heading = document.createElement("strong");
    const text = document.createElement("span");
    heading.textContent = title;
    text.textContent = detail;
    item.append(heading, text);
    return item;
  }));
  document.querySelector("#dialog-screenshots").replaceChildren(...app.screenshots.map(([src, alt]) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    figure.className = "screenshot-card";
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    figure.append(image);
    return figure;
  }));
  const storeLink = document.querySelector("#dialog-store");
  storeLink.hidden = !app.store;
  if (app.store) storeLink.href = app.store;
  document.querySelector("#dialog-privacy").href = app.privacy;
  document.querySelector("#dialog-terms").href = app.terms;
  const healthLink = document.querySelector("#dialog-health");
  healthLink.hidden = !app.health;
  healthLink.href = app.health || "#";
  document.querySelector("#dialog-support").href = app.support;
  if (!dialog.open) dialog.showModal();
  if (updateHash) history.replaceState(null, "", `#${id}`);
}

document.querySelectorAll("[data-app]").forEach(button => {
  button.addEventListener("click", () => openApp(button.dataset.app));
});

function parseLegalHash() {
  const match = location.hash.slice(1).match(/^([^/]+)\/(privacy|terms|health)$/);
  if (!match || !(match[1] in apps)) return null;
  return { appId: match[1], type: match[2] };
}

function closeDialog() {
  dialog.close();
  appCaseView.hidden = false;
  legalView.hidden = true;
  legalDocument.replaceChildren();
  if (location.hash.slice(1) in apps || parseLegalHash()) history.replaceState(null, "", location.pathname + location.search);
}

closeButton.addEventListener("click", closeDialog);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("cancel", event => {
  event.preventDefault();
  closeDialog();
});

async function showLegal(type, updateHash = true) {
  const app = apps[currentAppId];
  if (!app) return;
  const source = app[type];
  if (!source) return;
  appCaseView.hidden = true;
  legalView.hidden = false;
  legalDocument.innerHTML = '<p class="legal-loading">Loading document…</p>';
  dialog.scrollTop = 0;
  if (updateHash) history.replaceState(null, "", `#${currentAppId}/${type}`);

  try {
    const response = await fetch(source);
    if (!response.ok) throw new Error("Document unavailable");
    const html = await response.text();
    const parsed = new DOMParser().parseFromString(html, "text/html");
    const content = parsed.querySelector("main");
    if (!content) throw new Error("Document content unavailable");
    content.querySelectorAll("nav, footer, script, style").forEach(element => element.remove());
    legalDocument.replaceChildren(...Array.from(content.childNodes).map(node => node.cloneNode(true)));
  } catch (error) {
    legalDocument.innerHTML = "<h1>Document unavailable</h1><p>Please try again after the page has been published.</p>";
  }
}

document.querySelectorAll("[data-legal]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showLegal(link.dataset.legal);
  });
});

legalBack.addEventListener("click", () => {
  legalView.hidden = true;
  appCaseView.hidden = false;
  dialog.scrollTop = 0;
  history.replaceState(null, "", `#${currentAppId}`);
});

function closeContactDialog() {
  contactDialog.close();
}

contactTrigger.addEventListener("click", () => contactDialog.showModal());
dialogSupport.addEventListener("click", (event) => {
  event.preventDefault();
  closeDialog();
  contactDialog.showModal();
});
contactCloseButton.addEventListener("click", closeContactDialog);
contactDialog.addEventListener("click", event => {
  if (event.target === contactDialog) closeContactDialog();
});
contactDialog.addEventListener("cancel", event => {
  event.preventDefault();
  closeContactDialog();
});

document.querySelector("#year").textContent = new Date().getFullYear();
const initialApp = location.hash.slice(1);
const initialLegal = parseLegalHash();
if (initialLegal) {
  openApp(initialLegal.appId, false);
  showLegal(initialLegal.type, false);
} else if (initialApp in apps) {
  openApp(initialApp, false);
}
