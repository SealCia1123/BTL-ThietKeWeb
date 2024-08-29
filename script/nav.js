$(document).ready(function () {
    // Xử lý ẩn hiện nav trên mobile
    $('#show-button').click(function () {
        $('.nav-mobile-container').animate({ width: 'toggle' }, 300);
    });
    $('#close-nav-mobile').click(function () {
        $('.nav-mobile-container').animate({ width: 'toggle' }, 300);
    });
});
