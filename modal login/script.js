const link = document.querySelector(".login-link");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");
const form = popup.querySelector("form");

const isStorageSupport = true;

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
close.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("modal-show");
});
form.addEventListener("submit", function (e) {
  if (!login.value || !password.value) {
    e.preventDefault();
    alert("nope");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
