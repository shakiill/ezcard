
(function($){
    "use strict";
    $(document).ready(function() {


        /***********************************************
         * jQuery to collapse the navbar on scroll
         ***********************************************/

        $(window).scroll(function () {

            var nav = $('.navbar-unibody');
            if (nav.length) {

                if ($(".navbar-unibody").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }}
        });



        /***********************************************
         * Highlight the top nav as scrolling occurs
         ***********************************************/

        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 65
        });

        /***********************************************
         * Closes the Responsive Menu on Menu Item Click in One Page Nav
         ***********************************************/

        $('.navbar-onepage .navbar-collapse ul li a') .on('click', function() { $('.navbar-onepage .navbar-toggle:visible') .click(); });

        /***********************************************
         * Active class to nav
         ***********************************************/

        var url = window.location;
        $('ul.nav a[href="' + url + '"]').parent().addClass('active');
        $('ul.nav a').filter(function () {
            return this.href == url;
        }).parent().addClass('active');


    });
})(jQuery);