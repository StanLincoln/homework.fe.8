/*--------------------------------DOM-FORM----------------------------------*/
const root = document.querySelector(".root");
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
root.append(wrapper);

const leftContainer = document.createElement("div");
leftContainer.classList.add("left__container");
wrapper.append(leftContainer);

const img = document.createElement("img");
img.src = "img/bear.svg";
img.alt = "bear";
leftContainer.append(img);

const rightContainer = document.createElement("div");
rightContainer.classList.add("right__container");
wrapper.append(rightContainer);

const form = document.createElement("form");
form.classList.add("form__container");
rightContainer.append(form);

const headContainer = document.createElement("div");
headContainer.classList.add("head__container");
form.append(headContainer);

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Create account";
headContainer.append(title);

const itemContainer = document.createElement("div");
itemContainer.classList.add("item__container");
headContainer.append(itemContainer);

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
form.append(paragraphs);

const labelForName = document.createElement("label");
labelForName.setAttribute("for", "name");
labelForName.textContent = "Full name";
form.append(labelForName);

const nameInput = document.createElement("input");
nameInput.setAttribute("class", "name");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "John Rambo");
nameInput.setAttribute("required", "");
form.append(nameInput);

const labelForEmail = document.createElement("label");
labelForEmail.setAttribute("for", "email");
labelForEmail.textContent = "Email address";
form.append(labelForEmail);

const emailInput = document.createElement("input");
emailInput.setAttribute("class", "email");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "hello@hey.com");
emailInput.setAttribute("required", "");
form.append(emailInput);

const labelForPassword = document.createElement("label");
labelForPassword.setAttribute("for", "password");
labelForPassword.textContent = "Create password";
form.append(labelForPassword);

const passwordInput = document.createElement("input");
passwordInput.setAttribute("class", "password");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "•••••••••••••");
passwordInput.setAttribute("required", "");
form.append(passwordInput);

const labelForPasswordConfirm = document.createElement("label");
labelForPasswordConfirm.setAttribute("for", "passwordConfirm");
labelForPasswordConfirm.textContent = "Confirm password";
form.append(labelForPasswordConfirm);

const passwordConfirmInput = document.createElement("input");
passwordConfirmInput.setAttribute("class", "password");
passwordConfirmInput.setAttribute("type", "password");
passwordConfirmInput.setAttribute("placeholder", "••••••••••••••");
passwordConfirmInput.setAttribute("required", "");
form.append(passwordConfirmInput);

const checkContainer = document.createElement("div");
checkContainer.classList.add("check__container");
form.append(checkContainer);

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

const div3 = document.createElement("div");
checkContainer.append(div3);

const label = document.createElement("label");
label.setAttribute("for", "agree");
label.innerHTML =
  '<label>I agree to the <a href="#">terms</a> & <a href="#">privacy policy</a></label>';
div3.append(label);

const button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Register";
form.append(button);

/*------------------------Submit-Form----------------------------------*/
const userFromStorage = JSON.parse(localStorage.getItem("userData"));
if(userFromStorage){
  nameInput.value = userFromStorage.name;
  emailInput.value = userFromStorage.email;
  passwordInput.value = userFromStorage.password;
  passwordConfirmInput.value = userFromStorage.password;
}

const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
console.log(userArray);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    passwordConfirm: passwordInput.value,
  };

  localStorage.setItem("userData", JSON.stringify(user));

  userArray.push(user);
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";

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