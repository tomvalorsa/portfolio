var removeActive = function() {
  $('.footer-nav').removeClass('active-footer-nav');
}


$(document).ready(function() {
  $('#fullpage').fullpage({
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Profile', 'Projects', 'Skills', 'Contact & Info'],
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      if(index == 1){
        removeActive();
        $('#profile').addClass('active-footer-nav');
      }

      if(index == 2){
        removeActive();
        $('#projects').addClass('active-footer-nav');
      }

      if(index == 3){
        removeActive();
        $('#skills').addClass('active-footer-nav');
        $('.skills h4').addClass('animated flipInX').css('visibility', 'visible');

      }

      if(index == 4){
        removeActive();
        $('#contact').addClass('active-footer-nav');
        // Make it draw an arrow to the top nav buttons here. Crayon preferable (red).
      }
    }
  });

  // Initialise the stickers.
  Sticker.init('.sticker');

  // Footer nav events.
  $('#profile').click(function() {
    removeActive();
    $('#profile').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(1, 0);
  });

  $('#projects').click(function() {
    removeActive();
    $('#projects').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(2, 0);
  });

  $('#skills').click(function() {
    removeActive();
    $('#skills').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(3, 0);
  });

  $('#contact').click(function() {
    removeActive();
    $('#contact').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(4, 0);
  });

});
