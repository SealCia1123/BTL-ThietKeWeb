window.addEventListener('load', function () {
    // Xử lý chọn rạp, chọn phim không bị chèn dưới các element khác
    const selectSections = this.document.querySelectorAll('select');
    for (let s of selectSections) {
        s.addEventListener('focus', function () {
            if (s === selectSections[0]) this.setAttribute('size', '3');
            else this.setAttribute('size', '5');
            this.setAttribute('style', 'position: absolute');
        });
        s.addEventListener('change', function () {
            this.setAttribute('size', '1');
            this.setAttribute('style', 'position: relative');
            this.blur();
        });
        s.addEventListener('blur', function () {
            this.setAttribute('size', '1');
            this.setAttribute('style', 'position: relative');
            this.blur();
        });
    }
    // Khi ngày vào chọn ngày
    let dates = this.document.querySelectorAll('.select-date>label');
    let currentDate = new Date();
    for (let i = 0; i < dates.length; i++) {
        dates[i].innerText = `Ngày ${currentDate.getDate() + i + 1}/${currentDate.getMonth() + 1}`;
    }

    // Xử lý đặt ghế, đặt vé
    const premiumPrice = 149000;
    const regularPrice = 79000;
    const premiumTicket = this.document.querySelector('#premium-ticket');
    const regularTicket = this.document.querySelector('#regular-ticket');
    const seats = this.document.querySelectorAll('.seat');
    let totalPrice = 0;
    let tickets = 0;
    const ticketNumber = this.document.querySelector('.ticket-number');
    const totalPricePrint = this.document.querySelector('.total-price');

    // Set tiền vé mặc định là premium vì trong html loại vé mặc định được chọn là premium
    let pricePerTicket = premiumPrice;
    const ticketInput = this.document.querySelectorAll('.ticket-input');

    // Xóa tất cả ghế đã checked
    function removeCheckSeat(seats) {
        for (let s of seats) {
            s.checked = false;
        }
    }
    for (let t of ticketInput) {
        t.addEventListener('click', function () {
            // Khi đổi loại vé phòng, xóa tất cả ghế đã check, reset lại số lượng vé, tổng tiền
            removeCheckSeat(seats);
            ticketNumber.innerText = '0';
            totalPricePrint.innerText = '0';
            totalPrice = 0;
            tickets = 0;
            if (this === premiumTicket) pricePerTicket = premiumPrice;
            else if (this === regularTicket) pricePerTicket = regularPrice;
        });
    }

    for (let s of seats) {
        s.addEventListener('click', function () {
            // kiểm tra tình trạng ghế để tính số vé, tổng tiền
            if (this.checked) tickets++;
            else tickets--;
            totalPrice = pricePerTicket * tickets;
            let t = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
            }).format(totalPrice);
            t = t.replace('₫', '');
            totalPricePrint.innerText = t;
            ticketNumber.innerText = tickets;
        });
    }
    // Nút xác nhận đặt vé
    const confirmBtn = this.document.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (totalPrice === 0) alert('Vui lòng điền đủ thông tin!');
        else confirm('Xác nhận đặt vé');
    });
});
