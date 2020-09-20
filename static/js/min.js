$(document).ready(function() {

    function checkOffset() {
        if ($(".fixed-top").offset().top > 80) {
            $(".fixed-top").addClass("top-nav-collapse");
            $(".fixed-top").addClass("blue");
            $(".fixed-top").removeClass("navbar-light")
            $(".fixed-top").addClass("navbar-dark");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
            $(".fixed-top").addClass("navbar-light");
            $(".fixed-top").removeClass("blue");
            $(".fixed-top").removeClass("navbar-dark");
        }
    }
    checkOffset();
    $(window).scroll(function() { checkOffset(); });
    $('#small-screen-menu').on("click", function() {
        $("#fullpage, #fp-nav, .brand-logo, footer").toggleClass("menu-opened");
        $("body, html").toggleClass("modal-open");
        $(this).toggleClass('open').toggleClass('custom-menu');
    });

    $(".icn-hover").on("mouseover mouseout", function(event) {
        if (event.type == "mouseover") {
            $(".hover-appear").removeClass("hidden")
        } else if (event.type == "mouseout") {
            $(".hover-appear").addClass("hidden")
        }
    })

});