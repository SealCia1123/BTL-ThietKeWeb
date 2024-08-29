window.addEventListener('load', function () {
    // Chuyển hướng đăng nhập hoặc đăng ký
    const loginButton = document.querySelector('.login>a:first-child');
    const registerButton = document.querySelector('.login>a:last-child');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = './login.html#tab1';
    });
    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = './login.html#tab2';
    });
});
