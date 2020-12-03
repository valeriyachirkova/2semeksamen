/**
 * file: js.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {
    
    // ... your code here ...
    var isActive = false;
    var iconArray = [
        '<img src="images/burger-icon.svg" alt="Menu icon" />',
        '<img src="images/cross-icon.svg" alt="Menu icon" />'
    ];
    
    $('#burger-icon').click(function(){
        if (isActive){
            $(this).html(iconArray[0]);
            isActive = false;
        }
        else {
            $(this).html(iconArray[1]);
            isActive = true;
        }
    });
    
    $("#dropdown-menu").hide();

    $("#burger-icon").click(function () {
        $("#dropdown-menu").toggle();
    });


    window.addEventListener('scroll', function (e) {
        const target = document.querySelectorAll('.bobble');

        //counting all elements from the variabel target wich contains all list-elements 
        var index = 0,
            length = target.length;

        for (index; index < length; index++) {
            var pos = window.pageYOffset * target[index].dataset.rate;

            if (target[index].dataset.direction === 'vertical') {
                target[index].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
            } else {
                var posX = window.pageYOffset * target[index].dataset.ratex;
                var posY = window.pageYOffset * target[index].dataset.ratey;

                target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
            }
        }
    });
    // ... end ...
    
});
