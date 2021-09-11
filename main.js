// const bars = document.querySelector('#menu');
const navbars = document.querySelectorAll('.navbar');
// var elmnt = document.getElementById("body");
// function selectItem(e)
// {
//     bars.classList.toggle('fa-times');
//     navbars.classList.toggle('nav-toggle');    
// }
// bars.addEventListener('click', selectItem);
// var y = elmnt.scrollHeight;
// if (y > 68)
// {
//     navbars.cssText = 'position:fixed';    
// }
$(document).ready(function(){

    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).scroll(function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('fixed');
        }else{
            $('header .header-2').removeClass('fixed');
        }
        
    });
    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
function selectItem(e)
{
    $(this).addClass('header .header-2 .navbar ul li a.active');
}
navbars.forEach(item => {item.addEventListener('click', selectItem);
});