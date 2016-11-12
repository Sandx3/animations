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

  $('#slideLeftButton').click(function () {
    if ($('#slideLeftLine1').hasClass('button--slideLeft--open-line1') && $('#slideLeftLine3').hasClass('button--slideLeft--open-line3')) {
      $('#slideLeftLine1').removeClass('button--slideLeft--open-line1');
      $('#slideLeftLine1').addClass('button--slideLeft--close-line1');
      $('#slideLeftLine2').removeClass('button--slideLeft--open-line2');
      $('#slideLeftLine2').addClass('button--slideLeft--close-line2');
      $('#slideLeftLine3').removeClass('button--slideLeft--open-line3');
      $('#slideLeftLine3').addClass('button--slideLeft--close-line3');
    } else {
      $('#slideLeftLine1').addClass('button--slideLeft--open-line1');
      $('#slideLeftLine1').removeClass('button--slideLeft--close-line1');
      $('#slideLeftLine2').addClass('button--slideLeft--open-line2');
      $('#slideLeftLine2').removeClass('button--slideLeft--close-line2');
      $('#slideLeftLine3').addClass('button--slideLeft--open-line3');
      $('#slideLeftLine3').removeClass('button--slideLeft--close-line3');
    }
  })

  $('#slideRightButton').click(function () {
    if ($('#slideRightLine1').hasClass('button--slideRight--open-line1') && $('#slideRightLine3').hasClass('button--slideRight--open-line3')) {
      $('#slideRightLine1').removeClass('button--slideRight--open-line1');
      $('#slideRightLine1').addClass('button--slideRight--close-line1');
      $('#slideRightLine2').removeClass('button--slideRight--open-line2');
      $('#slideRightLine2').addClass('button--slideRight--close-line2');
      $('#slideRightLine3').removeClass('button--slideRight--open-line3');
      $('#slideRightLine3').addClass('button--slideRight--close-line3');
    } else {
      $('#slideRightLine1').addClass('button--slideRight--open-line1');
      $('#slideRightLine1').removeClass('button--slideRight--close-line1');
      $('#slideRightLine2').addClass('button--slideRight--open-line2');
      $('#slideRightLine2').removeClass('button--slideRight--close-line2');
      $('#slideRightLine3').addClass('button--slideRight--open-line3');
      $('#slideRightLine3').removeClass('button--slideRight--close-line3');
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
