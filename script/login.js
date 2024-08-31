window.addEventListener('load', function () {
    // Lấy tabs và div.tab-content
    const tabs = this.document.querySelectorAll('.tab>li>a');
    const tabContent = this.document.querySelectorAll('.tab-content>div');

    // Xử lý 2 nút đăng nhập/đăng ký riêng cho trang login
    // Do trang login không dùng chung logic việc chuyển active từng phần như các trang khác
    const loginButton = document.querySelector('.login>a:first-child');
    const registerButton = document.querySelector('.login>a:last-child');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        removeActive(tabs);
        removeActive(tabContent);
        tabs[0].classList.add('active');
        tabContent[0].classList.add('active');
    });
    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        removeActive(tabs);
        removeActive(tabContent);
        tabs[1].classList.add('active');
        tabContent[1].classList.add('active');
    });

    // Xử lý chuyển từ trang khác để hiện đăng nhập hoặc đăng ký phù hợp
    let lastCharHref = new String(this.window.location.href);
    lastCharHref = lastCharHref.charAt(lastCharHref.length - 1);
    if (lastCharHref === '1' || lastCharHref === '#') {
        tabs[0].classList.add('active');
        tabContent[0].classList.add('active');
    } else {
        tabs[1].classList.add('active');
        tabContent[1].classList.add('active');
    }

    function removeActive(element) {
        for (let e of element) {
            e.classList.remove('active');
        }
    }
    // Thêm sự kiện 2 nút tab
    for (let t of tabs) {
        t.addEventListener('click', function (event) {
            // Xóa cả 2 tab và nội dung sau đó add class active vào tab và nội dung tương ứng
            event.preventDefault();
            removeActive(tabs);
            removeActive(tabContent);
            this.classList.add('active');
            let tabNumber = this.getAttribute('href');
            document.querySelector(`${tabNumber}`).classList.add('active');
        });
    }

    let togglePasswordButton = this.document.querySelectorAll('.toggle-password');
    let passwordBox = this.document.querySelectorAll('.toggle-password ~ input');
    for (let i = 0; i < togglePasswordButton.length; i++) {
        togglePasswordButton[i].addEventListener('click', function () {
            if (passwordBox[i].getAttribute('type') == 'password') {
                passwordBox[i].setAttribute('type', 'text');
                togglePasswordButton[i].innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
            } else {
                passwordBox[i].setAttribute('type', 'password');
                togglePasswordButton[i].innerHTML = `<i class="fa-solid fa-eye"></i>`;
            }
        });
    }
});
