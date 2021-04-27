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
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (e) {
  if (!login.value || !password.value) {
    e.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
//Close with ESC
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (popup.classList.contains("modal-show")) {
      e.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
