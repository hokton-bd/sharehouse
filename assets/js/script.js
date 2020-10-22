$(document).ready(function() {

    function toggleChangeBtn() {

        var slideIndex = $('.slide').index($('.slide-active'));
        $('.button').show();
        if(slideIndex == 0) {

            $('.prev').hide();

        } else if (slideIndex == $('.slide').length - 1) {

            $('.next').hide();

        }

    }

    toggleChangeBtn();

    $('.next').on('click',function() {

        var currentSlide = $('.slide-active');

        currentSlide.removeClass('slide-active');
        currentSlide.next().addClass('slide-active');
        toggleChangeBtn();

    });

    $('.prev').on('click', function() {

        var currentSlide = $('.slide-active');

        currentSlide.removeClass('slide-active');
        currentSlide.prev().addClass('slide-active');
        toggleChangeBtn();
    });

    $('.opener').on('click', function() {

        $('.drawer').addClass('d-check');

    });

    $('.closer').on('click', function() {

        $('.drawer').removeClass('d-check');

    });

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });


});//document ready