$( document ).ready(function() {
  //Initializing material design
  $.material.init();

  $(window).hashchange( function(){
    if (location.hash == "#thx") {
      $('#thx-msg').show();
      $('#mc-embedded-subscribe-form').hide();
    } else {
      $('#thx-msg').hide();
      $('#mc-embedded-subscribe-form').show();
    }
  })
  $(window).hashchange();
  // sets the page size to the height of the window
  $(".pageContainer").css("min-height", $(window).height());

  //Scrollspy
  $('body').scrollspy({ target: '.navbar' });

  //Waypoints
  $('#about').waypoint(function(direction) {
    if (direction == 'down') {
      $('.navbar-nav > li').css('color','gray');
    }
    if (direction == 'up') {
      $('.navbar-nav > li').css('color','white');
    }
  }, {offset: 25});

});
