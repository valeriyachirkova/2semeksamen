/**
 * file: js.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {
    // ... your code here ...



    var video = document.getElementById("logo_spin");


    $(video).mouseover(function () {
        video.play();

    });

    $(video).mouseout(function () {
        video.pause();
    });



    $(video).click(function () {
        if (video.paused){
            video.play();
        }
        
        else{
            video.pause();
        }
        

    });

  
    // ... end ...
});
