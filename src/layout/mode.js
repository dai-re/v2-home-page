//! ini jelek tapi bekerja

window.onload = () => {
  document.getElementById("btn").innerHTML = localStorage.getItem("colorMode");
};
function darkMode(mode) {
  document.body.className = mode;
  localStorage.setItem("colorMode", mode);
}
function changeMode() {
  const currentMode = localStorage.getItem("colorMode");
  const mewMode = currentMode === "dark" ? "light" : "dark";
  darkMode(mewMode);
  document.getElementById("btn").innerHTML = mewMode;
}
document.addEventListener("DOMContentLoaded", () => {
  const saveMode = localStorage.getItem("colorMode");
  showContent();
  darkMode(saveMode);
});
function showContent() {
  document.body.style.visibility = "visible";
  document.body.style.opacity = 1;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", changeMode);