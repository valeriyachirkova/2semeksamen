/**
 * file: shop.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... your code here ...
    $(".product_showcase").mouseover(function () {
        $(this).children(".see-more-text").css("z-index", "-1");
    });
    $(".product_showcase").mouseout(function () {
        $(this).children(".see-more-text").css("z-index", "-10");
    });
    // ... end ...

});
