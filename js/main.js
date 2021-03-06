$(document).ready(function() {

    $("#greeting").addClass("animated bounceInDown");
    $("#job-role").addClass("animated bounceInLeft");

    $(".column-left, .column-right").waypoint(function() {
        $(".column-left").addClass("animated shake");
        // $(".column-right").addClass("animated swing");
    },
    {
        offset: '50%'
    });

    $(".my-skills").waypoint(function() {
        $(".my-skills").addClass("animated fadeInUp");
        
    },
    {
        offset: '40%'
    });

    $(".my-projects").waypoint(function() {
        $(".my-projects").addClass("animated fadeInUp");
        
    },
    {
        offset: '40%'
    });

    $(".contact-section").waypoint(function() {
        $(".contact-section").addClass("animated fadeInUp");
        
    },
    {
        offset: '70%'
    });

    $(".hamburger").click(function() {

        $(this).toggleClass("is-active");
        $(".mobile-menu").toggle();

    });

    //Click Smooth Scroll

    $(document).on('click', 'a[href^="#"]', function(event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    })
});