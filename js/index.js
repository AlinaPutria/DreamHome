// loader
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
  maskL.classList.add('hide');
  setTimeout(() => {
    maskL.remove();
  }, 1000)
});
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header-sticky');
  header.classList.toggle("sticky", window.scrollY > 0);

});
// BURGER
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-navigation-list');
burger.addEventListener('click', toggleNav);
function toggleNav() {
  console.log('clicked');
  burger.classList.contains('is-active') ? burger.classList.remove('is-active') : burger.classList.add('is-active');
  burgerMenu.classList.contains('active') ? burgerMenu.classList.remove('active') : burgerMenu.classList.add('active');
}
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
// .....................
//Get the button:
const mybutton = document.getElementById("myBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
mybutton.addEventListener("click", scrollToTop);
// 
// SLIDER SWIPER
const swiper_home = new Swiper('.home-swiper', {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  }
});

var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  loop: true,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  }
});
// .....................
document.querySelectorAll(".carousel").forEach((el) => {
  const myCarousel = new Carousel(el, {
    slidesPerPage: 1,
  });
});
// Load
$(document).ready(function () {
  $('.section-work-items-item-block:lt(2)').show();
  $('.less').hide();
  var items = 12;
  var shown = 2;
  $('.more').click(function () {
    $('.less').show();
    shown = $('.section-work-items-item-block:visible').length + 2;
    if (shown < items) {
      $('.section-work-items-item-block:lt(' + shown + ')').show(300);
    } else {
      $('.section-work-items-item-block:lt(' + items + ')').show(300);
      $('.more').hide();
    }
  });
  $('.less').click(function () {
    $('.section-work-items-item-block').not(':lt(2)').hide(300);
    $('.more').show();
    $('.less').hide();
  });
});
// ...............................
// Filter 
$(function ($) {
  $.autofilter({
    duration: 300
  });
});
// .....................
postShareButtonClick = $(function () {
  var buttonWrapper = $(".share-button"),
    button = $(".share-button > a"),
    icons = $(".share-button > .icon-wrapper"),
    close = $(".close-social-icons");

  function init() {
    button.on("click", toggle);
    close.on("click", closeIcons);
  }

  function toggle(e) {
    if (buttonWrapper.hasClass("active")) {
      closeIcons();
    } else {
      openIcons();
    }
    e.preventDefault();
  }

  function openIcons() {
    buttonWrapper.addClass("active");
    button.addClass("hidden");
    buttonWrapper.animate({ width: "286" }, 500);
    icons.animate({ left: "0" }, 500);
  }

  function closeIcons() {
    buttonWrapper.removeClass("active");
    button.removeClass("hidden");
    icons.animate({ left: "-286" }, 0);
    buttonWrapper.animate({ width: "178" }, 0);
  }

  init();
});