window.addEventListener('load', function () {
    const THOUSAND = 1000;
    const addButton = this.document.querySelectorAll('.add');
    const minusButton = this.document.querySelectorAll('.minus');
    let count = this.document.querySelectorAll('.count');
    let bill = this.document.querySelector('.bill');
    const itemsPrice = this.document.querySelectorAll('.item-price');
    let totalPrice = parseInt(this.document.querySelector('.total-price').innerText);
    // Kiểm tra totalPrice
    function displayBill(num) {
        if (num === 0) bill.setAttribute('style', 'display: none');
        else bill.setAttribute('style', 'display: block');
    }

    for (let i = 0; i < addButton.length; i++) {
        addButton[i].addEventListener('click', function (event) {
            event.preventDefault();
            let numCount = parseInt(count[i].innerText) + 1;
            count[i].innerText = numCount;
            totalPrice += parseInt(itemsPrice[i].innerText) * THOUSAND;
            let price = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
            }).format(totalPrice);
            price = price.replace('₫', '');
            document.querySelector('.total-price').innerText = price;
            displayBill(totalPrice);
        });
        minusButton[i].addEventListener('click', function (event) {
            event.preventDefault();
            if (count[i].innerText > 0) {
                let numCount = parseInt(count[i].innerText) - 1;
                count[i].innerText = numCount;
                totalPrice -= parseInt(itemsPrice[i].innerText) * THOUSAND;
                let price = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'VND',
                }).format(totalPrice);
                price = price.replace('₫', '');
                document.querySelector('.total-price').innerText = price;
                displayBill(totalPrice);
            }
        });
    }
});
