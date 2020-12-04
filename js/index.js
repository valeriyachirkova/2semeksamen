/**
 * file: index.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... your code here ...
    var blackBoxVideo = document.getElementById("blackBoxVideo");
    
    $("#position-relative").click(function () {
        if (blackBoxVideo.paused) {
            blackBoxVideo.play();
            $("#play-button").hide();
        } else {
            blackBoxVideo.pause();
            $("#play-button").show();
        }
    });
    
    $("#start-button").click(function () {
        blackBoxVideo.pause();
        $("#black-box").css("display", "none");
    });
    
    
    var video = document.getElementById("logo_spin");

    $(video).mouseover(function () {
        video.play();
    });

    $(video).mouseout(function () {
        video.pause();
    });

    $(video).click(function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
    
    
    $(".img_product").mouseover(function () {
        $(this).children(".see-more-text").css("z-index", "10");
        $(this).css("transform", "scale(1.05)");
    });
    $(".img_product").mouseout(function () {
        $(this).children(".see-more-text").css("z-index", "-10");
        $(this).css("transform", "scale(1)");
    });
    // ... end ...

});
