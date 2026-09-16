const apps = {
  tiphaven: {
    title: "TipHaven",
    kicker: "Tips, shifts & earnings",
    description: "A private shift tracker for hospitality workers. Log tips, wages, hours, and tip-outs, then see what your time was really worth.",
    icon: "assets/tiphaven.png",
    store: "https://apps.apple.com/app/id6805177188",
    privacy: "apps/tiphaven/privacy.html",
    terms: "apps/tiphaven/terms.html",
    support: "mailto:degeestkenneth@gmail.com?subject=TipHaven%20Support"
  },
  bulkbro: {
    title: "BulkBro",
    kicker: "Adaptive weight-gain coach",
    description: "An evidence-based calorie and weight coach for hardgainers. BulkBro learns from your meals, weigh-ins, and completed weeks to adapt your target.",
    icon: "assets/bulkbro.png",
    store: "https://apps.apple.com/app/id6770476671",
    privacy: "apps/bulkbro/privacy.html",
    terms: "apps/bulkbro/terms.html",
    support: "mailto:degeestkenneth@gmail.com?subject=BulkBro%20Support"
  },
  migraloom: {
    title: "MigraLoom",
    kicker: "Private migraine journal",
    description: "Capture migraine episodes in seconds, understand patterns in your record, and prepare a clear visit summary for appointments—all without a MigraLoom account.",
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

function openApp(id, updateHash = true) {
  const app = apps[id];
  if (!app) return;
  document.querySelector("#dialog-icon").src = app.icon;
  document.querySelector("#dialog-icon").alt = `${app.title} app icon`;
  document.querySelector("#dialog-kicker").textContent = app.kicker;
  document.querySelector("#dialog-title").textContent = app.title;
  document.querySelector("#dialog-description").textContent = app.description;
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

function closeContactDialog() {
  contactDialog.close();
}

contactTrigger.addEventListener("click", () => contactDialog.showModal());
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
