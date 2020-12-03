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
    var pictureIndex = 1;
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
        productPic[pictureIndex - 1].style.display = "block";
        picButtons[pictureIndex - 1].className += " active";
    }
    
    $('#front_pic').click(function(){currentPicture(1)});
    $('#side_pic').click(function(){currentPicture(2)});
    $('#back_pic').click(function(){currentPicture(3)});
  // ... end ...
});
