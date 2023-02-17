// 获取页面的所有元素
var page = document.body.cloneNode(true);
var pageCount = 1;
var hupu = document.getElementById("hupu");
var ithome = document.getElementById("ithome");
var zhibo8 = document.getElementById("zhibo8");

// function topPage() {
//     // 创建新的页面元素
//     var newPage = document.createElement("div");
//     newPage.innerHTML = page.innerHTML;
//     document.body.insertBefore(newPage, document.body.firstChild);
// }

function bottomPage() {
    // 创建新的页面元素
    var newPage = document.createElement("div");
    newPage.innerHTML = page.innerHTML;
    document.body.appendChild(newPage);
}

function change() {
    if ((screen.width) <= 600) {
        hupu.href = "https://m.hupu.com/";
        ithome.href = "https://m.ithome.com/";
        zhibo8.href = "https://m.zhibo8.cc/";
    };
}

window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        bottomPage();
        pageCount++;
        if ((pageCount) >= 2) {
            document.body.removeChild(document.body.firstChild);
        };
        change();
    };
    // if (window.scrollY <= 0) {
    //     topPage();
    // };
}


window.onload = function () {
    change();
}
