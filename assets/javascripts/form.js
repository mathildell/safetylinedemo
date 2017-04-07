$(document).ready(function () {
//for show/hide
    $('.showHideSection .toggleCheck input[name="showhide"]').change(function(){
        var id = $(this).attr('id');

        if($(this)[0].checked){
            $('.showHideSection[data-id='+ id +']').removeClass('closed');
        }else{
            $('.showHideSection[data-id='+ id +']').addClass('closed');
        }
    });

    //attachment
    $('#attachment').change(function(){
        var file = $(this)[0].files[0]
        if (file){
            if($('.attachment-file:empty').length > 0){
                $('.attachment-file:empty').first().html('<span class="icon-Options"></span> '+file.name);
                //to do: when name too long
                //to do: spinning icons & change when done loading
                //to do: allow 4 file upload
            }
        }
    });

    $('#selectReport').change(function(){
        if($('.hideBefSelect').not(':visible')){
            $('.hideBefSelect').fadeIn(700);
        }
    });

});
$()