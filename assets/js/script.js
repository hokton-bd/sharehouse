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


});