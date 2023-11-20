const switcher = document.querySelector('input[type="checkbox"]')

const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
  document.body.classList.add(currentTheme)
}

if (document.body.classList.contains('dark-mode')) {
  switcher.checked = true
}
switcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  console.log(document.body.classList)
  localStorage.setItem('theme', document.body.classList)
})
