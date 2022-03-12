function qs(expr, context) {
  return (context || document).querySelector(expr);
}
function qsa(expr, context) {
  return [].slice.call((context || document).querySelectorAll(expr), 0);
}
function byId(id) {
  return document.getElementById(id);
}

const state = {
  isAnimating: true,
  animMode: "complex",
  colorMode: true,
  isReverse: false,
  colorMode: "dark"
};

// elements
let root = document.documentElement;
let app = byId("app");
let animPlayToggle = byId("animPlayToggle");
let animModeToggle = byId("animModeToggle");
let colorToggle = byId("colorToggle");
let reverseToggle = byId("reverseToggle");

let updateDOM = () => {
  app.setAttribute("data-anim-running", state.isAnimating);
  app.setAttribute("data-anim-mode", state.animMode);
  app.setAttribute("data-reverse", state.isReverse);
  animPlayToggle.textContent = state.isAnimating ? "Playing" : "Paused";

  root.style.setProperty(
    "--color-line",
    state.colorMode === "dark" ? "white" : "black"
  );
  root.style.setProperty(
    "--color-bg",
    state.colorMode === "dark" ? "black" : "white"
  );
  root.style.setProperty(
    "--color-gradient",
    state.colorMode === "dark" ? "1%" : "98%"
  );
};

updateDOM();

animPlayToggle.addEventListener("click", (e) => {
  state.isAnimating = !state.isAnimating;
  updateDOM();
});

animModeToggle.addEventListener("click", (e) => {
  state.animMode = state.animMode === "simple" ? "complex" : "simple";
  updateDOM();
});

reverseToggle.addEventListener("click", (e) => {
  state.isReverse = !state.isReverse;
  updateDOM();
});

colorToggle.addEventListener("click", (e) => {
  state.colorMode = state.colorMode === "dark" ? "light" : "dark";
  updateDOM();
});

for (var i = 1; i <= 12; i++) {
  let layer = qs(`.layer--${i}`);
  let fragment = document.createDocumentFragment();
  Array.from({ length: 6 * i }, (x, i) => {
    fragment.appendChild(document.createElement("div"));
  });
  layer.appendChild(fragment);
}
