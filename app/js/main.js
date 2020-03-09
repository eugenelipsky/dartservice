$(function () {
    $('.toggle').click(function(e) {
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
    });

    $('.team__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        asNavFor: '.team__info-slider'
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
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});
