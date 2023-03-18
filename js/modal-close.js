(() => {
  const modalClose = document.querySelector(".close-btn");
  const input = document.querySelector(".design input");
  let checked = true;

  modalClose.addEventListener("click", function (e) {
    if (e.target.checked == true) {
      e.target.checked = false;
    }
  });
})();
(() => {
  const modal = document.querySelectorAll(".design .modal");
  const designCon = document.querySelector(".design-con");
  let mouseStart = 0;
  let move = 0;
  let click = false;

  designCon.addEventListener("mousedown", function (e) {
    mouseStart = e.clientX;
    click = true;
    // if (click == true) {
    //   modal.forEach((item) => {
    //     item.style.display = "none";
    //   });
    // }
  });

  //check box가 선택되면
  designCon.addEventListener("mousemove", function (e) {
    if (click == true) {
      console.log(e.clientX - mouseStart);
      move = e.clientX - mouseStart;
      designCon.style.transform = `translateX(${move}px)`;
      // modal.forEach((item) => {
      //   item.style.display = "none";
      // });
    }
  });
  designCon.addEventListener("mouseup", function (e) {
    click = false;
  });
})();
