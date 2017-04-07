$(function(){
  /*
    $('.addactions').click(function(){

    });
  */

  $('.txtarea[readonly]').each(function(){
      $(this).css({ 'min-height' : $(this)[0].scrollHeight });
  });
  var higher = $('.timeline .evnt').sort( function(a,b) {
   return $(b).height() - $(a).height();
  });
  $('.timeline').height(higher.first().height() + 30);
  var originalActive = $('.timeline .evnt.original');
  $('.timeline .evnt').hover(function(){
    $('.timeline .evnt').not(this).removeClass('active');
    $(this).addClass('active');
    //$(this).show();
  }, function(){
    $('.timeline .evnt').not(originalActive).removeClass('active');
    originalActive.addClass('active');
  });
});