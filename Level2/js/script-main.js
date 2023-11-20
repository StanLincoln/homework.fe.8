/*--------------------------------DOM-MAIN----------------------------------*/


  const root = document.querySelector(".root");
  const wrap__container = document.createElement("div");
  wrap__container.classList.add("wrap__container");
  root.append(wrap__container);

  const header__container = document.createElement("header");
  header__container.classList.add("header__container");
  wrap__container.append(header__container);

  const header__logo = document.createElement("div");
  header__logo.classList.add("header__logo");
  header__container.append(header__logo);

  const logo__img = document.createElement("img");
  logo__img.setAttribute("src", "img/Logo.svg");
  logo__img.setAttribute("alt", "logo");
  logo__img.classList.add("logo__img");
  header__logo.append(logo__img);

  const logo__title = document.createElement("p");
  logo__title.classList.add("logo__title");
  logo__title.textContent = "Company";
  header__logo.append(logo__title);

  const header__links = document.createElement("div");
  header__links.classList.add("header__links");
  header__container.append(header__links);

  const header__nav = document.createElement("nav");
  header__nav.classList.add("header__nav");
  header__links.append(header__nav);

  const ulNav = document.createElement("ul");
  header__nav.append(ulNav);

  const liHome = document.createElement("li");
  const aHome = document.createElement("a");
  aHome.setAttribute("href", "#");
  aHome.classList.add('nav__link');
  aHome.textContent = "Home";
  liHome.append(aHome);
  ulNav.append(liHome);

  const liAbout = document.createElement("li");
  const aAbout = document.createElement("a");
  aAbout.setAttribute("href", "#");
  aAbout.classList.add('nav__link');
  aAbout.textContent = "About";
  liAbout.append(aAbout);
  ulNav.append(liAbout);
  
  const liStore = document.createElement("li");
  const aStore = document.createElement("a");
  aStore.setAttribute("href", "#");
  aStore.classList.add('nav__link');
  aStore.textContent = "Store";
  liStore.append(aStore);
  ulNav.append(liStore);

  const header__toggle = document.createElement("div");
  header__toggle.classList.add("header__toggle");
  header__links.append(header__toggle);

  const switcherToggle = document.createElement("label");
  switcherToggle.classList.add("switch");
  header__toggle.append(switcherToggle);

  const checkInput = document.createElement("input");
  checkInput.setAttribute("type", "checkbox");
  switcherToggle.append(checkInput);

  const sliderToggle = document.createElement("span");
  sliderToggle.classList.add("slider");
  sliderToggle.classList.add("round");
  switcherToggle.append(sliderToggle);

  const header__selection = document.createElement("div");
  header__selection.classList.add("header__selection");
  header__links.append(header__selection);

  const pAccount = document.createElement("p");
  pAccount.textContent = "Account";
  header__selection.append(pAccount);

  const iChevronDown = document.createElement("i");
  iChevronDown.classList.add("fa-solid");
  iChevronDown.classList.add("fa-chevron-down");
  header__selection.append(iChevronDown);

  const main__container = document.createElement("main");
  main__container.classList.add("main");
  wrap__container.append(main__container);

  const left__box = document.createElement("div");
  left__box.classList.add("left__box");
  main__container.append(left__box);

  const left__title = document.createElement("h1");
  left__title.classList.add("left__title");
  left__title.textContent = "Hello world";
  left__box.append(left__title);

  const p = document.createElement("p");
  p.textContent = "It is a long established fact that a reader will be distracted by the readable content";
  left__box.append(p);

  const btn = document.createElement("div");
  btn.classList.add("btn");
  left__box.append(btn);
  
  const btnLeft = document.createElement("button");
  btnLeft.classList.add("btn__left");
  btnLeft.textContent = "Button";
  btn.append(btnLeft);

  const btnRight = document.createElement("button");
  btnRight.classList.add("btn__right");
  btnRight.textContent = "Button";
  btn.append(btnRight);

  const right__container = document.createElement("div");
  right__container.classList.add("right__container");
  right__container.classList.add("mpage");
  main__container.append(right__container);

  const form__container = document.createElement("form");
  form__container.classList.add("form__container");
  form__container.classList.add("page");
  right__container.append(form__container);

  const form__header = document.createElement("div");
  form__header.classList.add("form__header");
  form__container.append(form__header);

  const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Login account";
form__header.append(title);

const itemContainer = document.createElement("div");
itemContainer.classList.add("item__container");
form__header.append(itemContainer);

const items = document.createElement("ul");
items.classList.add("items");
itemContainer.append(items);

const i = document.createElement("i");
i.classList.add("fa-brands", "fa-facebook-f");
items.append(i);

const i1 = document.createElement("i");
i1.classList.add("fa-brands", "fa-google");
items.append(i1);

const i2 = document.createElement("i");
i2.classList.add("fa-brands", "fa-twitter");
items.append(i2);

const paragraphs = document.createElement("p");
paragraphs.textContent = "Or register using email & password";
form__container.append(paragraphs);

const labelForEmail = document.createElement("label");
labelForEmail.setAttribute("for", "email");
labelForEmail.textContent = "Email address";
form__container.append(labelForEmail);

const emailInput = document.createElement("input");
emailInput.setAttribute("class", "email");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "hello@hey.com");
emailInput.setAttribute("required", "");
form__container.append(emailInput);

const labelForPassword = document.createElement("label");
labelForPassword.setAttribute("for", "password");
labelForPassword.textContent = "Create password";
form__container.append(labelForPassword);

const passwordInput = document.createElement("input");
passwordInput.setAttribute("class", "password");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "•••••••••••••");
passwordInput.setAttribute("required", "");
form__container.append(passwordInput);

const checkContainer = document.createElement("div");
checkContainer.classList.add("check__container");
form__container.append(checkContainer);

const div2 = document.createElement("div");
checkContainer.append(div2);

const input = document.createElement("input");
input.setAttribute("type", "checkbox");
input.setAttribute("name", "terms");
input.setAttribute("id", "agree");
input.setAttribute("checked", "");
div2.append(input);

const span = document.createElement("span");
span.classList.add("custom-checkbox");
div2.append(span);

const labelCheckbox = document.createElement("label");
labelCheckbox.setAttribute("for", "agree");
labelCheckbox.setAttribute("id", "checkbox__label");
labelCheckbox.textContent = 'Remember me';
div2.append(labelCheckbox);

const div3 = document.createElement("div");
checkContainer.append(div3);
const linkBox = document.createElement("a");
linkBox.setAttribute("href", "#");
linkBox.textContent = "Forgot password?";
div3.append(linkBox);

const button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Register";
form__container.append(button);

/*------------------------Submit-Form----------------------------------*/
const userFromStorage = JSON.parse(localStorage.getItem("userData"));
if(userFromStorage){
  emailInput.value = userFromStorage.email;
  passwordInput.value = userFromStorage.password;
}

const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
console.log(userArray);

form__container.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem("userData", JSON.stringify(user));

  userArray.push(user);
  emailInput.value = "";
  passwordInput.value = "";

  localStorage.setItem("userArray", JSON.stringify(userArray));
});

/*------------------------Switcher----------------------------------*/
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