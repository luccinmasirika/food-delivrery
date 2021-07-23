(function ($) {
  'use strict';

  //Left nav scroll
  $('.nano').nanoScroller();

  // Left menu collapse
  $('body').on('click','.left-nav-toggle a', function (event) {
    event.preventDefault();
    $('body').toggleClass('nav-toggle');
  });

  // Left menu collapse
  $('body').on('click','.left-nav-collapsed a', function (event) {
    event.preventDefault();
    $('#icon').toggleClass('hidden')
    $('body').toggleClass('nav-collapsed');
  });

  // Left menu collapse
  $('body').on('click','.right-sidebar-toggle', function (event) {
    event.preventDefault();
    $('#right-sidebar-toggle').toggleClass('right-sidebar-toggle');
  });

  //metis menu
  $('#menu').metisMenu();

  //slim scroll
  $('.scrollDiv').slimScroll({
    color: '#eee',
    size: '5px',
    height: '293px',
    alwaysVisible: false,
  });


$('body').on('hidden.bs.modal', '.modal', function (e) {
  alert('tested')
  $('input,textarea, select').val('');
})

  // //tooltip popover
  // $('[data-toggle="tooltip"]').tooltip();
  // $('[data-toggle="popover"]').popover();
})(jQuery);


