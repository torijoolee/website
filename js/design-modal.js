(() => {
  const modalClose = document.querySelectorAll(".close-btn");
  // const input = document.querySelectorAll(".design-wrap input");
  const modal = document.querySelectorAll(".modal");
  const checkBox = document.querySelectorAll(" input[name=design]");
  let checkTF = false;
  let checkdata = 0;

  for (let j = 0; j < checkBox.length; j++) {
    checkBox[j].dataset.index = j;
    // modal[j].dataset.index = j;
    modal.forEach((elem) => {
      elem.classList.add("none");
    });
    checkBox[j].addEventListener("change", function (e) {
      console.log(e.target.checked);
      console.log(e.target.dataset.index);
      checkTF = e.target.checked;
      checkdata = e.target.dataset.index;
      if (checkTF == true) {
        modal[checkdata].classList.remove("none");
      }

      modalClose.forEach((closeBtn) => {
        closeBtn.addEventListener("click", function () {
          for (let i = 0; i < modal.length; i++) {
            modal[i].classList.add("none");
            checkBox[j].checked = false;
          }
        });
      });
    });
  }
})();
