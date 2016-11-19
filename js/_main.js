;(function () {

    'use strict';

    var isiPad = function(){
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    var parallax = function()
    {
        $(window).stellar();
    };

    var burgerMenu = function()
    {

        $('body').on('click', '.js-fh5co-nav-toggle', function(event)
        {

            event.preventDefault();

            if ( $('#navbar').is(':visible') )
            {
                $(this).removeClass('active');
            }
            else
            {
                $(this).addClass('active');
            }



        });

    };


    var clickMenu = function()
    {

        $('#navbar a:not([class="external"])').click(function(event)
        {
            var section = $(this).data('nav-section'),
                navbar = $('#navbar');

            if ( $('[data-section="' + section + '"]').length )
            {
                $('html, body').animate
                (
                    {
                        scrollTop: $('[data-section="' + section + '"]').offset().top - 55
                    },
                    500
                );
            }

            if ( navbar.is(':visible'))
            {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });


    };

    var navActive = function(section)
    {

        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function()
        {
            $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
        });

    };

    var navigationSection = function()
    {

        var $section = $('section[data-section]');

        $section.waypoint(function(direction)
        {

            if (direction === 'down')
            {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function(direction)
        {
            if (direction === 'up')
            {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function() { return -$(this.element).height() + 155; }
        });

    };

    var windowScroll = function()
    {
        var lastScrollTop = 0;

        $(window).scroll(function(event)
        {

            var header = $('#fh5co-header'),
                scrlTop = $(this).scrollTop();

            if ( scrlTop > 500 && scrlTop <= 2000 )
            {
                header.addClass('navbar-fixed-top fh5co-animated slideInDown');
            }
            else if ( scrlTop <= 500)
            {
                if ( header.hasClass('navbar-fixed-top') )
                {
                    header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                    setTimeout(function()
                    {
                        header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                    }, 100 );
                }
            }

        });
    };

    var homeAnimate = function()
    {
        if ( $('#fh5co-home').length > 0 )
        {

            $('#fh5co-home').waypoint( function( direction )
            {

                if( direction === 'down' && !$(this.element).hasClass('animated') )
                {

                    setTimeout(function() {
                        $('#fh5co-home .to-animate').each(function( k )
                        {
                            var el = $(this);

                            setTimeout ( function ()
                            {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };
    var servicesAnimate = function()
    {
        var services = $('#fh5co-services');
        if ( services.length > 0 )
        {

            services.waypoint( function( direction )
            {

                if( direction === 'down' && !$(this.element).hasClass('animated') )
                {

                    var sec = services.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);

                    setTimeout(function()
                    {
                        services.find('.to-animate').each(function( k )
                        {
                            var el = $(this);

                            setTimeout ( function ()
                            {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);

                    setTimeout(function()
                    {
                        services.find('.to-animate-2').each(function( k )
                        {
                            var el = $(this);

                            setTimeout ( function ()
                            {
                                el.addClass('bounceIn animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };
    $(function(){

        parallax();
        burgerMenu();
        clickMenu();
        windowScroll();
        navigationSection();
        homeAnimate();
        servicesAnimate();
        setNav();
    });


}());