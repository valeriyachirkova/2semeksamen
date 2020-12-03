/**
 * file: js.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {
  // ... your code here ...

  var video = document.getElementById("video");

  $("#media1").click(function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // ... end ...
});
