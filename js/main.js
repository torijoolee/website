(() => {
  window.addEventListener("load", function () {
    this.document.body.classList.remove("before-load");
  });
  document.querySelector(".loading").addEventListener("transitionend", (e) => {
    document.body.removeChild(e.currentTarget);
  });

  let observer = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.isIntersecting) {
        item.target.style.opacity = 1;
        item.target.style.transform = `translateY(0px)`;
      } else {
        item.target.style.opacity = 0;
      }
    });
  });
  let about = document.querySelector(".about");
  observer.observe(about);

  // typing Effects
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
