(() => {
  const modalClose = document.querySelectorAll(".close-btn");
  // const input = document.querySelectorAll(".design-wrap input");
  const modal = document.querySelectorAll(".modal");
  const checkBox = document.querySelectorAll(" input[name=design]");

  //모달 전부 안보이게 하기
  modal.forEach((elem) => {
    elem.classList.add("none");
  });

  //인풋에 데이터인덱스 넣어주기
  //checkbox 체크 감지
  for (let j = 0; j < checkBox.length; j++) {
    checkBox[j].dataset.index = j;
    checkBox[j].addEventListener("change", function (e) {
      console.log(e.currentTarget.checked);
    });
  }

  //체크박스를 누르면 모달 클래스 none 제거

  // for(let j= 0; j<checkBox.length; j++){
  //   checkBox[i].classList.remove("none")
  // }
  //모달 닫기를 누르면 모달 안보이게하기
  // modalClose.forEach((closeBtn) => {
  //   closeBtn.addEventListener("click", function () {
  //     console.log("clicked");
  //     for(let i = 0; i< modal.length; i++){
  //       modal[i].classList.
  //     }
  //   });
  // });
})();
