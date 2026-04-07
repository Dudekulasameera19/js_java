let time = document.getElementById("time");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let startSound = new Audio("./assets/wall clock.mp3");

let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let x = null;

start.onclick = function () {
    if (x !== null) return;

    startSound.currentTime = 0;
    startSound.play().catch(() => { });

    x = setInterval(function () {
        ms++;

        if (ms == 100) {
            ms = 0;
            s++;
        }

        if (s == 60) {
            s = 0;
            m++;
        }

        if (m == 60) {
            m = 0;
            h++;
        }
        let hh = h < 10 ? "0" + h : h;
        let mm = m < 10 ? "0" + m : m;
        let ss = s < 10 ? "0" + s : s;
        let mss = ms < 10 ? "0" + ms : ms;

        time.innerText = hh + ":" + mm + ":" + ss + ":" + mss;
    }, 10);
};

pause.onclick = function () {
    clearInterval(x);
    x = null;

    startSound.pause();
    startSound.currentTime = 0;
};

reset.onclick = function () {
    clearInterval(x);
    x = null;
    startSound.pause();
    startSound.currentTime = 0;
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    time.innerText = "00:00:00:00";
};