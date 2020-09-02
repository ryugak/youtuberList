'use strict';
$(() => {
  const more = () => {
    const watchmore = $('.p-watchmore');
    const hrefMore = $('.hrefMore');
    const youtubermore = $('.p-youtuber__list--more');
    const close = $('.p-close');
    watchmore.on('click', () => {
      youtubermore.fadeIn();
      watchmore.css('display', 'none');
      close.css('display', 'block');
    });
    close.on('click', () => {
      youtubermore.fadeOut('slow');
      close.css('display', 'none');
      watchmore.fadeIn('slow');
    });
    hrefMore.on('click', () => {
      youtubermore.fadeIn();
      watchmore.css('display', 'none');
      close.css('display', 'block');
    });
  };
  more();
  const menu = () => {
    const $hamuburger = $('.l-hamburgerMenu');
    const $spInner = $('.l-header__sp');
    const $spIndex = $('.l-headerList__text');
    $hamuburger.on('click', () => {
      show();
    });
    $spIndex.on('click', () => {
      hide();
    });
    const show = () => $spInner.slideToggle();
    const hide = () => $spInner.slideUp();
  };
  menu();
  const scroll = () => {
    const speed = 500;
    const adjust = 100;
    $('a[href^="#"]').on('click', () => {
      const href= $(event.currentTarget).attr('href');
      const target = $(href == '#' || href == '' ? 'html' : href);
      const position = target.offset().top - adjust;
      $('html, body').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  };
  scroll();
  const resize = () => {
    const $hdrSp = $('.l-header__sp');
    $(window).resize(() => {
      change();
    });
    const change = () => $hdrSp.css('display', 'none');
  };
  resize();
  const lazy = () => {
    $('img.lazyload').lazyload();
  };
  lazy();
});
