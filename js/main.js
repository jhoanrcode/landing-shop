$(document).ready(function(){
    /*Menu mobile*/
    $(".burger-mobile").click(function() {
        $(this).toggleClass("is-active");
        $('.iconos-menu').toggleClass('fa-bars');
        $('.iconos-menu').toggleClass('fa-times');
        $('.menu__mobile').toggleClass("menu-fix");
        main();
    });

});

//$(document).ready(main);

var contador = 1;
function main() {
    if (contador == 1) {
        $('nav').animate({
            left: '0'
        });
        contador = 0;
    } else {
        contador = 1;
        $('nav').animate({
            left: '-100%'
        });
    }  
};

var slider = tns({
    container: ".my-slider-2",
    items: 3,
    arrowKeys: true,
    swipeAngle: false,
    mouseDrag: true,
    controls: false,
    responsive: {
        992: {
          items: 3
        },
        540: {
          items: 2
        },
        200: {
          items: 1
        }
    }
});


