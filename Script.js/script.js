$('.counte_main1').counterUp({
    delay: 10,
    time: 1000,
});
let main_menu = document.querySelector('.main_menu')
console.log(main_menu)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    main_menu.classList.add('menu_fixed')
  } else {
    main_menu.classList.remove('menu_fixed')
  }
})


// $('.bannar_slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,

// });
$('.bannar_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-chevron-left xxx"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right nrr"></i>',
  dots:true
});






var words = ['Web Designer.','Web Developer.',  'Professional Coder.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
