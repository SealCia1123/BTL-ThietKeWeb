window.addEventListener("load", function () {
    let subm = this.document.querySelector(".submit");
    subm.addEventListener("click", function () {
        let name = document.getElementById("name-input").value;
        let gender = document.getElementById("gender-input").value;
        let phone = document.getElementById("phone-input").value;
        let address = document.getElementById("address-input").value;
        let email = document.getElementById("email-input").value;
        let support = document.getElementById("support-input").value;
        let content = document.getElementById("content-input").value;
        if (name === "" || gender === "Chọn giới tính" || phone === "" || address === ""
            || email === "" || support === "Chọn mục nội dung" || content === "")
            alert("Vui lòng nhập đầy đủ thông tin để gửi phiếu!");
        else
            if (confirm("Xác nhận gửi phiếu?") === true)
                alert("Gửi phiếu chăm sóc khách hàng thành công!");
    });
});