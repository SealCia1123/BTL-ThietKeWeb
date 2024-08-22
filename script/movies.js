window.onload = function () {
    let currentDate = new Date();
    let dates = document.querySelectorAll('.date');
    for (let d of dates) {
        currentDate.setDate(currentDate.getDate() + 1);
        d.innerText = `Ngày ${currentDate.getDate()}/${currentDate.getMonth()}`;
    }
};
