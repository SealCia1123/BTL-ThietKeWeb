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

    let slideIndex = 0;
    showSlides();
    function showSlides() {
        let slides = document.getElementsByClassName('slides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 4000);
    }
};
