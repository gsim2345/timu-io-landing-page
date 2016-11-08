$(document).ready(function() {
    //Initializing material design
    $.material.init();

    // sets the page size to the height of the window
    $(".pageContainer").css("min-height", $(window).height());

    //Scrollspy
    $('body').scrollspy({
        target: '.navbar'
    });

    //Waypoints
    $('#about').waypoint(function(direction) {
        if (direction == 'down') {
            $('.navbar-nav > li').css('color', 'gray');
        }
        if (direction == 'up') {
            $('.navbar-nav > li').css('color', 'white');
        }
    }, {
        offset: 25
    });

});
