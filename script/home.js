window.onload = function () {
    let dmb = document.querySelectorAll("button.darkmode");
    for (db of dmb) {
        db.onclick = function () {
            let bg = document.getElementById("headbg");
            bg.style.background = "linear-gradient(purple, violet)";
        };
    }
};
