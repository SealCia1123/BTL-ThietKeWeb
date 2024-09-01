window.addEventListener("load", function () {

    let form = this.document.querySelector(".form");
    form.style.display = "none";
    let insert = this.document.querySelector(".insert");
    insert.addEventListener("click", function () {
        if (form.style.display === "none")
            form.style.display = "block";
        else form.style.display = "none";
    });

    let btn = this.document.getElementById("addbtn");
    btn.addEventListener("click", function () {
        let name = document.getElementById("name").value;
        let require = document.getElementById("require").value;
        let discription = document.getElementById("discription").value;
        let detail = discription.split('\n');
        let reqdetail = require.split('\n');
        let dd = ``;
        for (let d of detail) {
            dd += `<li>${d}</li>`;
        }
        let rr = ``;
        for (let r of reqdetail) {
            rr += `<li>${r}</li>`;
        }
        let h = `
        <div>
            <h1><i class="fa-solid fa-user-plus"></i> ${name}</h1>
            <h3>Yêu cầu:</h3>
            <ul>
                ${rr}
            </ul>
            <h3>Mô tả công việc:</h3>
            <ul>
                ${dd}
            </ul>
        </div>`
        if (name === "" || require === "" || discription === "")
            alert("Vui lòng nhập đầy đủ thông tin để thêm vị trí công việc!");
        else {
            if (confirm("Bạn có chắc chắn muốn thêm công việc này không?") === true) {
                let a = document.querySelector(".staff:first-child");
                a.insertAdjacentHTML("afterend", h);
            }
        }
    });
});