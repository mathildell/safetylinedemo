
//for modals, later
function openModal(){
    $('.header, .footer, .global-container').addClass('blur');
    $('body').addClass('blocked');
    $('.modal').addClass('active');
}
function closeModal(){
    $('.header, .footer, .global-container').removeClass('blur');
    $('body').removeClass('blocked');
    $('.modal').removeClass('active');
}

function init(){
    $('#demoModal').click(function(){
        if($('.header').hasClass('blur')){
            closeModal();
        }else{
            openModal();
        }
    });

    $('.modal .close').click(function(e){
        e.preventDefault();
        closeModal();
    });

    $('.textInput').focus(function(){ 
        $(this).addClass('active');
    }).blur(function(){
        if(!$(this).val() || $(this).val() === ""){
            $(this).removeClass('active');
        }   
    });
}

$(document).ready(function () {
    init();
});
