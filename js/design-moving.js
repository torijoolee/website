(() => {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const designCon = document.querySelector(".moving-con");
  const designItem = document.querySelectorAll(".design-wrap");
  const designItemWidth = document.querySelector(".design-wrap").offsetWidth;
  let currentPage = 0;

  console.log(designItemWidth);

  prevBtn.addEventListener("click", function () {
    if (currentPage == 0) {
      currentPage = designItem.length - 1;
    }
    if (currentPage > 0) {
      currentPage--;
      designCon.style.transform = `translateX(-${
        designItemWidth * currentPage
      }px)`;
      designCon.style.transition = "0.5s";
    }
  });
  nextBtn.addEventListener("click", function () {
    if (currentPage < designItem.length - 2) {
      currentPage++;
      designCon.style.transform = `translateX(-${
        designItemWidth * currentPage
      }px)`;
      designCon.style.transition = "0.5s";
    } else {
      designCon.style.transform = `translateX(-${0}px)`;
      currentPage = 0;
    }
  });
  window.addEventListener("resize", function () {
    this.document.location.reload();
  });
})();
