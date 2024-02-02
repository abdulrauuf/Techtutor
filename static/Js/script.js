let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

   autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });


  // teachers slider//
  var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  //  autoplay: {
  //       delay: 2000,
  //       disableOnInteraction: false,
  //   },

    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });


  //reviews slider//
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // autoplay: {
    //     delay:3500,
    //     disableOnInteraction: false,
    // },
    
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });