(() => {
  const toggleBtn = document.querySelector(".toggle");
  const toggleMenu = document.querySelector(".toggle-menu");

  toggleBtn.addEventListener("click", function () {
    if (toggleMenu.classList.contains("active")) {
      toggleMenu.classList.remove("active");
    } else {
      toggleMenu.classList.add("active");
    }
  });
  toggleMenu.addEventListener("click", function () {
    toggleMenu.classList.remove("active");
  });
})();
