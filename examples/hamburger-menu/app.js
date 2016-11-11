$(document).ready(function() {

  $('#fadeButton').click(function () {
    if ($('#fadeLine1').hasClass('button--fade--open-line1') && $('#fadeLine3').hasClass('button--fade--open-line3')) {
      $('#fadeLine1').removeClass('button--fade--open-line1');
      $('#fadeLine1').addClass('button--fade--close-line1');
      $('#fadeLine2').removeClass('button--fade--open-line2');
      $('#fadeLine2').addClass('button--fade--close-line2');
      $('#fadeLine3').removeClass('button--fade--open-line3');
      $('#fadeLine3').addClass('button--fade--close-line3');
    } else {
      $('#fadeLine1').addClass('button--fade--open-line1');
      $('#fadeLine1').removeClass('button--fade--close-line1');
      $('#fadeLine2').addClass('button--fade--open-line2');
      $('#fadeLine2').removeClass('button--fade--close-line2');
      $('#fadeLine3').addClass('button--fade--open-line3');
      $('#fadeLine3').removeClass('button--fade--close-line3');
    }
  })

  $('#arrowButton').click(function () {
    if ($('#arrowLine1').hasClass('button--arrow--open-line1') && $('#arrowLine3').hasClass('button--arrow--open-line3')) {
      $('#arrowLine1').removeClass('button--arrow--open-line1');
      $('#arrowLine1').addClass('button--arrow--close-line1');
      $('#arrowLine2').removeClass('button--arrow--open-line2');
      $('#arrowLine2').addClass('button--arrow--close-line2');
      $('#arrowLine3').removeClass('button--arrow--open-line3');
      $('#arrowLine3').addClass('button--arrow--close-line3');
    } else {
      $('#arrowLine1').addClass('button--arrow--open-line1');
      $('#arrowLine1').removeClass('button--arrow--close-line1');
      $('#arrowLine2').addClass('button--arrow--open-line2');
      $('#arrowLine2').removeClass('button--arrow--close-line2');
      $('#arrowLine3').addClass('button--arrow--open-line3');
      $('#arrowLine3').removeClass('button--arrow--close-line3');
    }
  })

});
