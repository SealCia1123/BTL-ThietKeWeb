window.addEventListener('load', function () {
    const THOUSAND = 1000;
    const addButton = this.document.querySelectorAll('.add');
    const minusButton = this.document.querySelectorAll('.minus');
    let count = this.document.querySelectorAll('.count');
    let countStack = [];
    let bill = this.document.querySelector('.bill');
    const itemPrices = this.document.querySelectorAll('.item-price');
    let totalPrice = parseInt(this.document.querySelector('.total-price').innerText);
    // Kiểm tra stack count có trống -> ẩn bill
    function handleBill(stack) {
        if (stack.length === 0) bill.setAttribute('style', 'display: none');
        else bill.setAttribute('style', 'display: block');
    }
    for (let i = 0; i < addButton.length; i++) {
        // Push mỗi lần add vào stack và pop mỗi lần minus
        addButton[i].addEventListener('click', function () {
            let numCount = parseInt(count[i].innerText) + 1;
            count[i].innerText = numCount;
            countStack.push(1);
            totalPrice += parseInt(itemPrices[i].innerText) * THOUSAND;
            document.querySelector('.total-price').innerText = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(totalPrice);
            handleBill(countStack);
        });
        minusButton[i].addEventListener('click', function () {
            if (count[i].innerText > 0) {
                let numCount = parseInt(count[i].innerText) - 1;
                count[i].innerText = numCount;
                countStack.pop();
                totalPrice -= parseInt(itemPrices[i].innerText) * THOUSAND;
                document.querySelector('.total-price').innerText = totalPrice;
                handleBill(countStack);
            }
        });
    }
});
