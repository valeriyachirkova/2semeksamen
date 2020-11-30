/**
 * file: js.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {
  // ... your code here ...
  $("#test-menu").hide();

  $("#burger-icon").click(function () {
    $("#test-menu").toggle();
  });

  // ... end ...
});
