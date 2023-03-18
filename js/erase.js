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
