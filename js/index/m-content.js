if (window.innerWidth < 650) {
function toggleContent() {
    var title = document.querySelector(".menu");
    var content = document.querySelector(".container");
    var backBtn = document.querySelector(".back-btn");
    title.style.display = "none";
    content.style.display = "inline";
    backBtn.style.display = "inline";
  }

  function back() {
    var title = document.querySelector(".menu");
    var content = document.querySelector(".container");
    var backBtn = document.querySelector(".back-btn");
    title.style.display = "flex";
    content.style.display = "none";
    backBtn.style.display = "none";
  }
}
