window.addEventListener("pageshow", times);
window.addEventListener("pagehide", timesbomb);
var y = document.getElementById("y");
var w = document.getElementById("w");
var d = document.getElementById("d");
var m = document.getElementById("m");
var t = document.getElementById("t");
var s = document.getElementById("s");

/* ——————————————————————————————————————————分割线———————————————————————————————————————————————————— */
var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

/* ——————————————————————————————————————————分割线———————————————————————————————————————————————————— */
var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

/* ——————————————————————————————————————————分割线———————————————————————————————————————————————————— */
function times() {
    setInterval(
        function () {
            y.innerHTML = new Date().getFullYear();
            w.innerHTML = weekday[new Date().getDay()];
            d.innerHTML = new Date().getDate();
            m.innerHTML = month[new Date().getMonth()];
            t.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
            s.innerHTML = new Date().getSeconds();
        }
        , 1000)
};

function timesbomb() {
    clearInterval(times);
};