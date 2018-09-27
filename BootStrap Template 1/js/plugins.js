/*global $, jQuery, alert*/

$(document).ready(function (){
    "use strict";
    $('.carousel').carousel({
        interval:5000
    });
    
    // Show Color Option Div when Click on The Gear 
$(".gear-check").click(function (){
    $(".color-option").fadeToggle();
});

// Change Theme Color On click 

var colorLi=$(".color-option ul li");

colorLi.eq(0).css("backgroundColor","#E41B17").end()
.eq(1).css("backgroundColor","#cc139e").end()
.eq(2).css("backgroundColor","#009AFF").end()
.eq(3).css("backgroundColor","#FFD500");
colorLi.click(function(){

    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    
    //console.log($(this).attr("data-value"));          
});
    //Scroll Top Button
    var scrollBtn = $("#scroll-top");
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 700){
         scrollBtn.show();   
        }
        else {
            scrollBtn.hide();
        }
    });
  // Click on Btn to scroll to top 
    scrollBtn.click(function (){
        $("html,body").animate({
            scrollTop:0},600);

    });
    // NiceScroll 
    $("html").niceScroll();
});

// Loading Screen
$(window).load(function (){
    
    // Loading Elements 
   $(".Loading-overlay .spinner").fadeOut(2000,function (){
       // Scroll Show 
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(2000,function (){
            
    $(this).remove();
        });
    });
});

