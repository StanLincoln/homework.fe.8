const switcher = document.querySelector(".slider");
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.classList.add(currentTheme);
}
switcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList);
});
