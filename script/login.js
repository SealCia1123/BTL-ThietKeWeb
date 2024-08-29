window.addEventListener(
    'load',
    function () {
        // Lấy tabs và div.tab-content
        const tabs = this.document.querySelectorAll('.tab>li>a');
        const tabContent = this.document.querySelectorAll('.tab-content>div');

        // Xử lý 2 nút đăng nhập/đăng ký riêng cho trang login
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

        // Xử lý chuyển từ trang khác
        let currentAddress = new String(this.window.location.href);
        currentAddress = currentAddress.charAt(currentAddress.length - 1);
        if (currentAddress === '1' || currentAddress === '2') {
            tabs[currentAddress - 1].classList.add('active');
            tabContent[currentAddress - 1].classList.add('active');
        } else {
            tabs[0].classList.add('active');
            tabContent[0].classList.add('active');
        }

        function removeActive(element) {
            for (let e of element) {
                e.classList.remove('active');
            }
        }
        for (let t of tabs) {
            t.addEventListener('click', function (event) {
                event.preventDefault();
                removeActive(tabs);
                removeActive(tabContent);
                this.classList.add('active');
                let tabNumber = this.getAttribute('href');
                document.querySelector(`${tabNumber}`).classList.add('active');
            });
        }

        // Thông báo đăng ký/đăng nhập
        const loginBtn = this.document.querySelector('#login-btn');
        const registerBtn = this.document.querySelector('#register-btn');
        loginBtn.addEventListener('click', function () {
            let email = document.forms['login']['email'].value;
            let pass = document.forms['login']['password'].value;
            if (email === '' || pass === '')
                alert('Vui lòng nhập đủ thông tin!');
            else alert('Đăng nhập thành công!');
        });
        registerBtn.addEventListener('click', function () {
            let name = document.forms['register']['name'].value;
            let dob = document.forms['register']['dob'].value;
            let phonenumber = document.forms['register']['phonenumber'].value;
            let username = document.forms['register']['username'].value;
            let id = document.forms['register']['id'].value;
            let email = document.forms['register']['email'].value;
            let password = document.forms['register']['password'].value;
            let confirmPassword =
                document.querySelector('#confirm-password').value;
            if (
                name === '' ||
                dob === '' ||
                phonenumber === '' ||
                username === '' ||
                id === '' ||
                password === '' ||
                confirmPassword === ''
            )
                alert('Vui lòng nhập đủ thông tin!');
            else {
                if (password === confirmPassword) alert('Đăng ký thành công');
                else alert('Mật khẩu nhập không giống nhau');
            }
        });
    },
    true
);
