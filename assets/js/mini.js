$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#myNavbar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#myNavbar").css('background', 'white');
          $('#contain').css('background', 'white');
          $('#home').css('color', '#101010');
          $('#contact').css('color', '#101010');
          $('#title').css('color', '#101010');
          $('#toggle').css('background', 'white');
          $('.icon-bar').css('background', 'black');
       } else {
          $('#myNavbar').css('background', '#101010');
          $('#contain').css('background', '#101010');
          $('#home').css('color', '#9d9d9d');
          $('#contact').css('color', '#9d9d9d');
          $('#title').css('color', '#9d9d9d');
          $('#toggle').css('background', '#101010');
          $('.icon-bar').css('background', 'white');
       }
   });
    }
});
