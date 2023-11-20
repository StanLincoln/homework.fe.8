
const switcher = document.querySelector('input[type="checkbox"]')
const currentTheme = localStorage.getItem("theme");
if (document.body.classList.contains('dark-mode')) {
  console.log(switcher)
  console.log(switcher.checked)
  switcher.checked = true
}
switcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList);
});

