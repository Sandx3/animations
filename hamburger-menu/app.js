$(document).ready(function() {

  $('#menuButton').click(function () {
    if ($('#line1').hasClass('button--open-line1') && $('#line3').hasClass('button--open-line3')) {
      $('#line1').removeClass('button--open-line1');
      $('#line1').addClass('button--close-line1');
      $('#line2').removeClass('button--open-line2');
      $('#line2').addClass('button--close-line2');
      $('#line3').removeClass('button--open-line3');
      $('#line3').addClass('button--close-line3');
    } else {
      $('#line1').addClass('button--open-line1');
      $('#line1').removeClass('button--close-line1');
      $('#line2').addClass('button--open-line2');
      $('#line2').removeClass('button--close-line2');
      $('#line3').addClass('button--open-line3');
      $('#line3').removeClass('button--close-line3');
    }
  })

});
