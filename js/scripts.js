$(document).ready(function () {

  //main nav
  $(window).on('scroll load', function () {
    updateMainNav();
  });

  function updateMainNav() {
    if ($(this).scrollTop() >= 50) {
      $('body').addClass('minimize-menu');
    } else {
      $('body').removeClass('minimize-menu');
    }
  }

  $('.user-nav > a').on('click', function () {
    $('body').toggleClass('show-user-nav');
  });

  $(document).on('click', function (event) {
    if ($('body').hasClass('show-user-nav')) $('body').removeClass('show-user-nav');
  });

  $('.collapse-main-nav').on('click', function () {
    if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
    return false;
  });

  $('.custom-tooltip').each(function () {
    var _this = $(this);
    $(this).tooltipster({
      animation: 'fade',
      delay: 0,
      offsetX: (_this.attr('data-offset-x')) ? parseInt(_this.attr('data-offset-x')) : 0,
      theme: 'tooltipster-default',
      touchDevices: false,
      trigger: 'click',
      contentAsHTML: true,
      maxWidth: 460,
      minWidth: 220,
      position: _this.attr('data-position'),
      content: $(_this.attr('data-content')).html()
    }).on('click', function () {
      return false;
    });
  });

  $(window).load(function () {
    $('.press-sidebar .flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 137,
      itemMargin: 40,
      minItems: 1,
      maxItems: 6,
      controlNav: false
    });
  });

  $(".knob").knob();

  $('.refill-page .btn-primary.btn-sm:eq(0), .wallet-page .export, button[data-target="#confirmDialog"], button[data-target="#docDialog"], button[data-target="#insufficientFunds"]').trigger('click');

  $('[data-provide="datepicker"]').each(function () {
    $(this).datepicker({
      language: 'ru',
      format: 'dd MM yyyy'
    }).datepicker('setDate', new Date());
  });

  $(window).on('resize', function() {
    console.log($(window).width())
    if ($(window).width() < 768) {
      $('.statistics-sidebar p.title').addClass('collapsed');
      $('#statistics').removeClass('in');
    } else {
      $('.statistics-sidebar p.title').removeClass('collapsed')
      $('#statistics').addClass('in');
    }
  });

  $('ul.timer').each(function () {
    var date = $(this).attr('data-finish');
    if (date !== undefined)
      $(this)
        .countdown(date)
        .on('update.countdown', function (event) {
        $(this).html(event.strftime(''
        + '<li><strong><span>%-D</span></strong> Дней</li>'
        + '<li><strong><span>%H</span></strong> ЧАСОВ</li>'
        + '<li><strong><span>%M</span></strong> МИНУТ</li>'
        + '<li><strong><span>%S</span></strong> СЕКУНД</li>'));
      });
  });


});