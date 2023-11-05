const mobileNav = document.getElementsByClassName("mobile_nav")[0];
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu_icon");
var clicked = false;


menu.addEventListener("click", () => {
      if (clicked) {
            mobileNav.style.transform = "translate(-100%)";
            document.body.style.overflow = 'auto';
            menuIcon.name = "reorder-three";
      } else {
            mobileNav.style.transform = "translate(0%)";
            document.body.style.overflow = 'hidden';
            menuIcon.name = "close";
      }
      clicked = !clicked;
});

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      pagination: {
            el: ".swiper-pagination",
            clickable: true
      },
      autoplay: {
            delay: 2500,
            disableOnInteraction: false,
      },
      breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
      },
});

const questions = document.querySelectorAll('.question');

questions.forEach((element) => {
      element.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-q');
            console.log(`[data-a="${id}"]`)
            document.querySelector(`[data-a="${id}"]`).style.display == "block" ? document.querySelector(`[data-a="${id}"]`).style.display = "none" : document.querySelector(`[data-a="${id}"]`).style.display = "block";
      });
});