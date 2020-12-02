/**
 * file: js.js
 * purpose: interactivity
 **/
console.log("JavaScript from index.js");

// Tjek at DOM er indlæst
$(document).ready(function () {
  // ... your code here ...
  $("#test-menu").hide();

  $("#burger-icon").click(function () {
    $("#test-menu").toggle().css('z-index','-1');
  });

  // ... end ...
});
