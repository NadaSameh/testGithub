$(document).ready(function(){
    "use strict";
  
      //scroll top
      var scrollButton=$('#scroll-top');
       $(window).scroll(function(){
          console.log($(this).scrollTop()); 
          //if($(this).scrollTop() >= 500)? scrollButton.show() : scrollButton.hide();
          if($(this).scrollTop() >= 500){
             scrollButton.show();
             
          }
          else{
             scrollButton.hide();
          }
          //click on button to scroll top
          scrollButton.click(function(){
            $('html,body').animate({scrollTop : 0} , 500);
          });
          
       });
       
});
