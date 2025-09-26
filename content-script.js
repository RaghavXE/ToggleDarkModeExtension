if (!document.body.dataset.darkMode) {
  document.body.dataset.darkMode = "off"; // default
}


function toggleDarkMode() {
  if (document.body.dataset.darkMode === "off") {
    document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
    document.body.dataset.darkMode = "on";
  } else {
    document.documentElement.style.filter = "invert(0)";
    document.body.dataset.darkMode = "off";
  }
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "toggle-dark-mode") {
    toggleDarkMode();
    sendResponse({ status: "toggled" });
  }
});