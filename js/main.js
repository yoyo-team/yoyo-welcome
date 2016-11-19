;(function () {

    $(function(){
        burgerMenu();

        clickMenu();
    });

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

        $('#navbar a').click(function(event)
        {
            var $this=$(this);
            $("#navbar li").removeClass('active');
            console.log($this.parent());
            $this.parent().addClass('active');
            // console.log(this); // <a> tag
            var section = $(this).data('nav-section'),
                $navbar = $('#navbar');

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

            if ( $navbar.is(':visible'))
            {
                $navbar.removeClass('in');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });


    };

}());