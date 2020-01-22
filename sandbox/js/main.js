/*------------------------------------------------------------------

Project:    Studio Html Page
Version:	1.7
Author:	    Iwthemes
Support:    support@iwthemes.com
Portfolio:  https://themeforest.net/user/iwthemes/portfolio?ref=iwthemes

-------------------------------------------------------------------*/

 (function ($) {
    "use strict";

     $(document).ready(function(){
        $('nav ul li a').click(function(){
            var el = $(this).attr('href');
            var elWrapped = $(el);
            scrollToDiv(elWrapped,40);
            return false;
        });
        function scrollToDiv(element,navheight){
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop-navheight;
                $('body,html').animate({
                            scrollTop: totalScroll
                }, 500);
        }
    });

    $(document).ready(function(){
      $(".item-service").owlCarousel({
            loop:true,
            nav:true,
            items: 1,
            dots: false,
        }
      );

      $(".testimonials").owlCarousel({
            loop:true,
            nav:false,
            items: 1,
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            autoplay: true,
            dots: false,
        }
      );

     $(".background-carousel").owlCarousel({
            loop:true,
            nav:false,
            items: 1,
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 2000
        }
      );
    });


 })( jQuery );
