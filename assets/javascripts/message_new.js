$(function(){
  //var msgContainHeight = $('.message-container').height(),
  //  msgContent = $('.message-container .content').height();

  var msgContainHeight,
      contentSelector = $('.message-container aside .content'),
      holderSelector = $('.message-container aside .side-msg-container'),
      scrollHeight, innerHeight;

  function contentHeight(){

    msgContainHeight = $('.message-container').height() - (70 + 60);

    if(typeof(scrollHeight) != "undefined"){
      scrollHeight = holderSelector[0].scrollHeight,
      innerHeight = holderSelector.innerHeight();
    }

    //console.log(msgContainHeight,innerHeight, scrollHeight, msgContainHeight > scrollHeight);

    if(typeof(scrollHeight) != "undefined" && msgContainHeight > scrollHeight){
      contentSelector.height(scrollHeight);
    }else{
      contentSelector.height(msgContainHeight);
      scrollHeight = holderSelector[0].scrollHeight,
      innerHeight = holderSelector.innerHeight();
    }
    //if()
    if(contentSelector.not(':visible')){
      contentSelector.show();
    }
  }



  contentHeight();


  contentSelector.hover(function(){
    scrollHeight = holderSelector[0].scrollHeight,
    innerHeight = holderSelector.innerHeight();
    if(typeof(scrollHeight) != "undefined" && scrollHeight > innerHeight){
      $('body').css({'overflow':'hidden'});
    }
  },function(){
    if(typeof(scrollHeight) != "undefined" && scrollHeight > innerHeight){
      $('body').css({'overflow':'auto'});
    }
  });

         
  var scrollT,
      scrollHeight = holderSelector[0].scrollHeight,
      innerHeight = holderSelector.innerHeight();




  $('.sidebarActions input').focus(function(){
    $('.sidebarActions .btn').addClass('small');
  });
  $('.sidebarActions input').blur(function(){
    if(!$('.sidebarActions input').val()){
      $('.sidebarActions .btn').removeClass('small');
    }
  });

  //var singleMsg = $('.message-container aside .content .singleMessage');
  var text, sender;
  
  $(document).on('click', '.message-container aside .content .singleMessage', function(){ 
    window.location.replace = '/message_view.html';
  }); 


  $('.showmsg').on('click', function(){
    $(this).hide();
    $('.message_list').slideDown(300, function(){
      contentHeight();
    });
  });





  $('.loadmore').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
      setTimeout(function(){
        holderSelector.append('<a class="singleMessage"> <header> <span class="notifNew"></span> Finding </header> <h3>Safety Management Systems for Aviation Service Providers</h3> <span>Safety-line, USER 2, USER 3</span> <time>Jan. 5th 2017 &nbsp;&nbsp;&nbsp; 8:40pm</time> </a> <a class="singleMessage hasAttachment"> <header> <span class="notifNew"></span> Finding </header> <h3>OPS / Unstable approach awareness</h3> <span>Safety-line</span> <time>Jan. 5th 2017 &nbsp;&nbsp;&nbsp; 8:40pm</time> </a> <a class="singleMessage"> <header> <span class="notifNew"></span> Finding </header> <h3>AIRPORT / Bird threat prevention action / Mesure de prévention aviaire</h3> <span>Safety-line</span> <time>Jan. 5th 2017 &nbsp;&nbsp;&nbsp; 8:40pm</time> </a> <a class="singleMessage hasAttachment"> <header> <span class="notifNew"></span> Finding </header> <h3>AIRPORT / Bird threat prevention action / Mesure de prévention aviaire</h3> <span>Safety-line</span> <time>Jan. 5th 2017 &nbsp;&nbsp;&nbsp; 8:40pm</time> </a> <a class="singleMessage hasAttachment"> <header> <span class="notifNew"></span> Report </header> <h3>Safety Management Systems for Aviation Service Providers</h3> <span>Safety-line</span> <time>Jan. 5th 2017 &nbsp;&nbsp;&nbsp; 8:40pm</time> </a>');
        $('.loadmore').removeClass('active');
        contentHeight();
      }, 500);
    }
  });

});
