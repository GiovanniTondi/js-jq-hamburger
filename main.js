/*
    mostrare / nascondere il menu principale
*/

// $('.header-right i').click(function () {
//     $('.hamburger-menu').show();
// });
//
// $('.hamburger-menu i').click(function () {
//     $('.hamburger-menu').hide();
// });
//

$('.header-right i').click(function () {
    $('.hamburger-menu').fadeIn();
});

$('.hamburger-menu i').click(function () {
    $('.hamburger-menu').fadeOut();
});
