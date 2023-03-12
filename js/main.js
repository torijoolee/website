(() => {
  window.addEventListener("load", function () {
    this.document.body.classList.remove("before-load");
  });

  let i = 0;
  let text;
  text = "Kyoungjoo Lee";

  function typing() {
    if (i < text.length) {
      document.querySelector(".header-title").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();
})();
