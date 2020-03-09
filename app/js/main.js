$(function () {

    wow = new WOW({
        mobile: false
    })
    wow.init();

    $('.toggle').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });

    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 540,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.team__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        asNavFor: '.team__info-slider',
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.team__info-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.team__slider',
        focusOnSelect: true,
        arrows: false,
    });

    $('.form__checkbox').styler();

    $('.header__video-img, .header__video-control').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.main__menu-mobile').on('click', function () {
        $('.main__menu').slideToggle();
        $(this).toggleClass('active')
    });

});