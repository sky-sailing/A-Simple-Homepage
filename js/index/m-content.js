// if (window.innerWidth < 650) {
//   function toggleContent() {
//     var title = document.querySelector(".menu");
//     // var content = document.querySelector(".content");
//     // var backBtn = document.querySelector(".back-btn");
//     // title.style.display = "none";
//     // content.style.display = "inline";
//     // backBtn.style.display = "inline";
//   }

// //   function back() {
// //     var title = document.querySelector(".menu");
// //     var content = document.querySelector(".content");
// //     // var backBtn = document.querySelector(".back-btn");
// //     // title.style.display = "flex";
// //     // content.style.display = "none";
// //     // backBtn.style.display = "none";
// //   }
// }

window.onload = function () {
  if (window.innerWidth < 650) {
    var titles = document.getElementsByClassName("titles");
    for (let i = 0; i < titles.length; i++) {
      titles[i].target = "_blank";
    };
  };
}