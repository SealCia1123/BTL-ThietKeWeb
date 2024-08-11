window.onload = function () {
	// Thêm class animate__animated vào các div overlay
	let addAni = document.querySelectorAll('.overlay');
	addAni.forEach(function (each) {
		each.classList.add('animate__animated');
	});

	// Duyệt qua các class hover-img và thêm eventListener khi di chuột vào thì toggle class animate__zoomIn
	let hoverImages = document.querySelectorAll('.hover-img');
	for (let i = 0; i < hoverImages.length; i++) {
		hoverImages[i].addEventListener('mouseenter', () => {
			document.querySelectorAll('.overlay')[i].classList.toggle('animate__zoomIn');
		});
	}
};
