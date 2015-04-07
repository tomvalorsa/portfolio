var removeActive = function() {
  $('.footer-nav').removeClass('active-footer-nav');
}


$(document).ready(function() {
  $('#fullpage').fullpage({
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
            }

            if(index == 4){
              removeActive();
              $('#contact').addClass('active-footer-nav');
            }
        }
    });


  $('.footer-nav').click(function() {

    // Not working for some reason.
    // this.addClass('active-footer-nav');

  });

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
    // And then navigate to the bottom of the site.
  });

  $('#contact').click(function() {
    removeActive();
    $('#contact').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(4, 0);
  });

});
