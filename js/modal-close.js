(() => {
  const modalClose = document.querySelector(".close-btn");
  const modal = document.querySelector(".design input");

  modalClose.addEventListener("click", function () {
    if (modal.checked == true) {
      modal.checked = false;
    }
  });
})();
