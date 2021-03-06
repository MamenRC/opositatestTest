(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .bind('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 1200) {
                    width = width / 6;
                } else if (width >= 900) {
                    width = width / 5;
                } else if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 3;
                }


                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');

                if (carousel.innerWidth() >= 900 && carousel.hasClass('press')) {
                    $('.jcarousel.press').jcarousel('items').css('width', Math.ceil(width * 1.5) + 'px');
                }
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);