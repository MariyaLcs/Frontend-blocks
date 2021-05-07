"use strict";

//Creating cookie message
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent= "We use cookies for improved functionality and analytics."
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';
const header = document.querySelector(".header");

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true))
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });
