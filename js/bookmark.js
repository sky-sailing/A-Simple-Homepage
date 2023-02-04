// 获取页面的所有元素
var page = document.body.cloneNode(true);
var pageCount = 1;

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

window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        bottomPage();
        pageCount++;
        if ((pageCount) >= 2) {
            document.body.removeChild(document.body.firstChild);
        };
    };
    // if (window.scrollY <= 0) {
    //     topPage();
    // };
}

if ((pageCount) >= 2) {
    document.body.removeChild(document.body.firstChild);
};