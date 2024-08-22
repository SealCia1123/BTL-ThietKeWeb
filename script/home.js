window.onload = function () {
    let horizontalZone = document.querySelectorAll('.movies');
    for (let h of horizontalZone) {
        h.addEventListener('wheel', function (e) {
            e.preventDefault();
            h.scrollBy({
                left: e.deltaY < 0 ? -70 : 70,
            });
        });
    }
};
