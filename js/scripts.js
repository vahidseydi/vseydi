$(document).ready(function(){
    $("#testimonial-slider1").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: false,
        navigation:true,
        navigationText:["",""],
        autoPlay:false,
        //slideSpeed : 20000, // Default 200
        //paginationSpeed : 800,
        //rewindSpeed : 8000,
    });
});
$(document).ready(function(){
    $("#testimonial-slider2").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: false,
        navigation:true,
        navigationText:["",""],
        autoPlay:false,
        //slideSpeed : 20000, // Default 200
        //paginationSpeed : 800,
        //rewindSpeed : 8000,
    });
});
/*---------------------------------------------*/


$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    });
});



