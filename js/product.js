/**
 * file: product.js
 * purpose: interactivity
 **/
console.log("JavaScript from product1/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {
  // ... your code here ...
  var productPic = document.getElementsByClassName("product_pic");
    var picButtons = document.getElementsByClassName("pic_button");
    var pictureIndex = 0;
    showPicture(pictureIndex);
    
    function currentPicture(n) {
        showPicture(pictureIndex = n);
    }
    
    function showPicture(n) {
        var i;
        for (i = 0; i < productPic.length; i++) {
            productPic[i].style.display = "none";
        }
        for (i = 0; i < picButtons.length; i++) {
            picButtons[i].className = picButtons[i].className.replace(" active", "");
        }
        productPic[pictureIndex].style.display = "block";
        picButtons[pictureIndex].className += " active";
    }
    
    $('#front_pic').click(function(){currentPicture(0)});
    $('#side_pic').click(function(){currentPicture(1)});
    $('#back_pic').click(function(){currentPicture(2)});
  // ... end ...
});
