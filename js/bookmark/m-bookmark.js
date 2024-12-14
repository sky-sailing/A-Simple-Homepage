var hupu = document.getElementById("hupu");
var ithome = document.getElementById("ithome");
var zhibo8 = document.getElementById("zhibo8");

function change() {
    if ((screen.width) <= 600) {
        hupu.href = "https://m.hupu.com/";
        ithome.href = "https://m.ithome.com/";
        zhibo8.href = "https://m.zhibo8.com/";
    };
}

window.onload = function () {
    change();
}
