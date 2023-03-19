const header = document.querySelector(".header");
const qrText = document.querySelector(".qr-text");
let headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", function () {
  if (window.scrollY > headerHeight / 4) {
    qrText.classList.add("none");
  } else {
    qrText.classList.remove("none");
  }
});
