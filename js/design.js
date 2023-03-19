(() => {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const designCon = document.querySelector(".design-con");
  const designItemWidth = document.querySelector(".design-wrap").offsetWidth;
  console.log(designItemWidth);

  prevBtn.addEventListener("click", function () {
    console.log("prev");
  });
  nextBtn.addEventListener("click", function () {
    console.log("next");
  });
})();
