/**
 * file: shop.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... your code here ...
    $(".position-relative").mouseover(function () {
        $(this).children(".pop-up-text").css("z-index", "5");
        $(this).css("transform", "scale(1.05)");
    });
    $(".position-relative").mouseout(function () {
        $(this).children(".pop-up-text").css("z-index", "-10");
        $(this).css("transform", "scale(1)");
    });
    
    /* Midlertidig billede effekt. Java Script vil erstatte det for fremtiden */
    $(".hover-effect").children("img").mouseover(function () {
        $(this).css("transform", "scale(1.05)");
    });
    $(".hover-effect").children("img").mouseout(function () {
        $(this).css("transform", "scale(1)");
    });
    // ... end ...

});
