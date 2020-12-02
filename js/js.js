/**
 * file: js.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {
  // ... your code here ...
  console.log('jQuery running.');

  $("#test-menu").hide();

  $("#burger-icon").click(function () {
    console.log('klik på test menu');
    $("#test-menu").toggle();
  });

  // ... end ...
});
