// 获取页面的所有元素
var pageCount = 1;
var page = document.body.cloneNode(true);

function m_bookmarkContent() {
    var hupu = document.getElementsByClassName("hupu");
    var ithome = document.getElementsByClassName("ithome");
    var zhibo8 = document.getElementsByClassName("zhibo8");
    if ((screen.width) <= 600) {
        for (let i = 0; i < hupu.length; i++) {
            hupu[i].href = "https://m.hupu.com/";
            ithome[i].href = "https://m.ithome.com/";
            zhibo8[i].href = "https://m.zhibo8.cc/";
        };
    };
  }

function bottomPage() {
    // 创建新的页面元素
    var newPage = document.createElement("div");
    newPage.innerHTML = page.innerHTML;
    document.body.appendChild(newPage);
}

// function topPage() {
//     // 创建新的页面元素
//     var newPage = document.createElement("div");
//     newPage.innerHTML = page.innerHTML;
//     document.body.insertBefore(newPage, document.body.firstChild);
// }

window.onload = function () {
    m_bookmarkContent();
}

window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        bottomPage();
        pageCount++;
        if ((pageCount) >= 2) {
            document.body.removeChild(document.body.firstChild);
        };
        m_bookmarkContent();
    };
    // if (window.scrollY <= 0) {
    //     topPage();
    // };
}
