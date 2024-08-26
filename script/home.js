window.onload = function () {
    // Tìm kiếm phim
    const movies = document.querySelectorAll('.movie');
    const movieNames = document.querySelectorAll('.name a');
    let search = document.querySelector('#search');
    const searchButton = document.querySelector('#search-button');
    let userInput = search.value;

    search.addEventListener('keyup', () => {
        userInput = search.value;
        console.log(userInput);
    });

    searchButton.addEventListener('click', function () {
        // Xu ly chuoi nguoi dung nhap
        userInput = new String(userInput);
        userInput = userInput.toUpperCase();
        // Kiem tra chuoi
        if (userInput === '') alert('Vui lòng nhập tên phim!');
        else {
            for (let name of movieNames) {
                let stringName = new String(name.innerText);
                stringName = stringName.replace(/ *\([^)]*\) */g, '');
                // Xu ly tim thay
                if (stringName.includes(userInput)) {
                    alert('tim thay');
                    return;
                }
            }
            alert('Khong tim thay');
        }
    });

    // Lướt vùng phim theo chiều ngang
    let horizontalZone = document.querySelectorAll('.movies');
    for (let h of horizontalZone) {
        h.addEventListener('wheel', function (e) {
            e.preventDefault();
            h.scrollBy({
                left: e.deltaY < 0 ? -40 : 40,
            });
        });
    }

    // Slideshow ảnh bìa
    let slideIndex = 0;
    showSlides();
    function showSlides() {
        let slides = document.querySelectorAll('.slides');
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
