let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

/* Beim Neuladen wird es verschwinden */
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
/* Ende */
/*Menü-Knopf */
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
/* Ende Menü-Knopf */
/* Knopfdruck */
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
/* Ende Knopfdruck */
/* Video */
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
/* End Video */
/* Slide*/
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /*Platz*/
    spaceBetween: 20,
    /* Das ist dafür damit es wieder von vorne Anfängt: (loop:true,)*/
    loop:true,

    autoplay: {
        delay: 3000,
        disableOnIneraction: true,
    },
    breakpoints: {
        640: {
            sliderPerView: 1,
        },
        768: {
            sliderPerView: 2,
        },
        1024: {
            sliderPerView: 3,
        },
    },
  });

  var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          sliderPerView: 1,
        },
        768: {
          sliderPerView: 2,
        },
        991: {
          sliderPerView: 3,
        },
        1200: {
          sliderPerView: 4,
        },
      },
});