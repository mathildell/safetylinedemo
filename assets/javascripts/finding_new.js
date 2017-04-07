$(function(){
    var $i = 1;
    $('.addactions').click(function(){
      $i++;
      $('.actionsRow').append('<div class="row"> <div class="col-1-1"><label class="title">Action #'+$i+'</lable></div> <div class="col-2-4 margin-10"> <div class="form-group"> <label>Description</label> <textarea class="txtarea"> Text helper </textarea> </div></div><div class="col-2-4"> <div class="row"> <div class="col-2-4"> <div class="form-group"> <label>Title</label> <input type="text" class="textInput margin-10" placeholder="eg. Text helper"> </div></div><div class="col-2-4"> <div class="form-group"> <label>Type</label> <div class="customSelect margin-10"><span class="icon-DownArrow"></span><select><option disabled selected>Select from list</option> <option>Preventive action</option><option>Corrective action</option></select></div></div></div></div><div class="row"> <div class="col-2-4"> <div class="form-group"> <label>Deadline</label> <input type="date" class="textInput margin-10" placeholder="eg. Text helper"> </div></div><div class="col-2-4"> <div class="form-group"> <label>Person in charge</label> <input type="text" class="textInput margin-10" placeholder="eg. Text helper"> </div></div></div></div></div>');
    });
                  
  $('.txtarea[readonly]').each(function(){
    console.log($(this));
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