const apps = {
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
    support: "mailto:degeestkenneth@gmail.com?subject=BulkBro%20Support"
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
  document.querySelector("#dialog-store").href = app.store;
  document.querySelector("#dialog-privacy").href = app.privacy;
  document.querySelector("#dialog-terms").href = app.terms;
  document.querySelector("#dialog-support").href = app.support;
  if (!dialog.open) dialog.showModal();
  if (updateHash) history.replaceState(null, "", `#${id}`);
}

document.querySelectorAll("[data-app]").forEach(button => {
  button.addEventListener("click", () => openApp(button.dataset.app));
});

function closeDialog() {
  dialog.close();
  appCaseView.hidden = false;
  legalView.hidden = true;
  legalDocument.replaceChildren();
  if (location.hash.slice(1) in apps) history.replaceState(null, "", location.pathname + location.search);
}

closeButton.addEventListener("click", closeDialog);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("cancel", event => {
  event.preventDefault();
  closeDialog();
});

async function showLegal(type) {
  const app = apps[currentAppId];
  if (!app) return;
  const source = type === "privacy" ? app.privacy : app.terms;
  appCaseView.hidden = true;
  legalView.hidden = false;
  legalDocument.innerHTML = '<p class="legal-loading">Loading document…</p>';
  dialog.scrollTop = 0;

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
if (initialApp in apps) openApp(initialApp, false);
