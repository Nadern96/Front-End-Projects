/* global $ , alert , console */

$(function (){
    
"use strict";
    // Adjust Header height 
    var myheader =$(".header"),
        myslider =$('.bxslider');
    myheader.height($(window).height());    

    $(window).resize(function(){
    myheader.height($(window).height()); 
        
    // Adjust Bx slider item center :
        
    myslider.each(function(){
        $(this).css("padding-top",($(window).height()-$(".bxslider li").height())/2);
    });
    });
    
    // links add active class 
    $('.links li a').click(function(){
        
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    // Adjust Bx slider item center :
    
    myslider.each(function(){
        $(this).css("padding-top",($(window).height()-$(".bxslider li").height())/2);
    });
    
    // Trigger BX slider 
     
    myslider.bxSlider(
    {
        pager:false
    }
    );
    
    //Smooth Scroll to div : 
    $('.links li a').click(function(){
        
        $('html,body').animate({
           scrollTop: $('#' + $(this).data('value')).offset().top 
            
        },1000);
    });
    
    // Our Auto Slider(self invoke func) :
    
    (function autoSlider () {
        
        $('.slider .active').each(function(){
            
            if(!$(this).is(':last-child')){
                
                $(this).delay(3000).fadeOut(1000,function(){
                   $(this).removeClass('active').next().addClass('active').fadeIn(); 
                    autoSlider ();

                });
            }
            else {
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slider div').first().addClass('active').fadeIn();
                    autoSlider ();
                });
            }
            
        });
    }());
    
    // Trigger mixItUp :
    
    $("#container").mixItUp();
    
    // Adjust shuffle links :
    $(".shuffle li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    
    //Triggering niceScroll
    $("html").niceScroll({
        cursorcolor:'#1abc9c',
        cursorwidth:'10px',
        cursorborder:'none'
    });
})