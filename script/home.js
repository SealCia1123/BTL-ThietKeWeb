window.onload = function () {
    // Gắn link phim
    const imgLink = document.querySelectorAll('.movie>div>a');
    const titleLink = document.querySelectorAll('.movie>div>h3>a');
    let moviesIndex = 0;
    for (let i = 0; i < imgLink.length; i++) {
        ++moviesIndex;
        imgLink[i].setAttribute('href', `./pages/movie${moviesIndex}.html`);
        titleLink[i].setAttribute('href', `./pages/movie${moviesIndex}.html`);
    }

    // Tìm kiếm phim
    const movies = document.querySelectorAll('.movie');
    const movieNames = document.querySelectorAll('.name a');
    let search = document.querySelector('#search');

    function displayMovies(e) {
        for (let movie of movies) {
            movie.setAttribute('style', 'display: none;');
        }
        for (let i = 0; i < e.length; i++) {
            e[i].setAttribute('style', 'display: block;');
        }
    }

    function clearSearch() {
        for (let movie of movies) {
            movie.setAttribute('style', 'display: block;');
        }
    }

    search.addEventListener('search', function () {
        // Xử lý chuỗi nhập vào
        let userInput = new String(this.value);
        userInput = userInput.toUpperCase();
        // Xử lý bấm nút clear
        if (this.value === '') clearSearch();
        // KT phim và đưa vào mảng các phim tìm thấy, những phim không có trong mảng sẽ ẩn đi
        // Nếu mảng phim tìm thấy rỗng thì thông báo
        else {
            let index = 0;
            let foundMovies = [];
            for (let i = 0; i < movieNames.length; i++) {
                let stringName = new String(movieNames[i].innerText);
                // Nếu tên phim có chứa giới hạn độ tuổi (T13, T16), bỏ phần giới hạn độ tuổi
                if (stringName.includes('(')) stringName = stringName.slice(0, -6);
                if (stringName.includes(userInput)) foundMovies[index++] = movies[i];
            }
            if (foundMovies.length === 0) alert('Khong tim thay phim');
            else displayMovies(foundMovies);
        }
    });

    // Lướt vùng phim theo chiều ngang
    let horizontalZone = document.querySelectorAll('.movies');
    for (let h of horizontalZone) {
        h.addEventListener('wheel', function (event) {
            event.preventDefault();
            h.scrollBy({
                left: event.deltaY < 0 ? -40 : 40,
            });
        });
    }

    // Slideshow ảnh bìa
    let slideIndex = 0;
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
    showSlides();
};
