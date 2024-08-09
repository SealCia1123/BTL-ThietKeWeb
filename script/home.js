window.onload = function () {
    let movies = document.querySelectorAll(".movies");
    let leftButton = document.querySelector("#left-arrow");
    let rightButton = document.querySelector("#right-button");


    rightButton.addEventListener("click", function () {
        movies.scrollLeft += 900;
    });
};
