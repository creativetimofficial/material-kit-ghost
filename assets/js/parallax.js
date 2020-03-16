
Ghost = {
  misc: {
    navbar_menu_visible: 0,
    window_width: 0,
    transparent: true,
    colored_shadows: true,
    fixedTop: false,
    navbar_initialized: false,
    isWindow: document.documentMode || /Edge/.test(navigator.userAgent)
  },

  checkScrollForParallax: function() {
    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });
  },

  checkScrollForTransparentNavbar: function() {
    if ($(document).scrollTop() > scroll_distance) {
      if (Ghost.misc.transparent) {
        Ghost.misc.transparent = false;
        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
      }
    } else {
      if (!Ghost.misc.transparent) {
        Ghost.misc.transparent = true;
        $('.navbar-color-on-scroll').addClass('navbar-transparent');
      }
    }
  }
};

$(document).ready(function() {
  window_width = $(window).width();
  $navbar = $('.site-nav[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500;


  if (window_width >= 768) {
    big_image = $('.site-header[data-parallax="true"]');
    if (big_image.length != 0) {
      $(window).on('scroll', Ghost.checkScrollForParallax);
    }

  }

  if ($('.navbar-color-on-scroll').length != 0) {
  $(window).on('scroll', Ghost.checkScrollForTransparentNavbar);
  }
});
