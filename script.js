
//Initializing material design
$( document ).ready(function() {
  $.material.init();


// sets the page size to the height of the window
  $(".pageContainer").css("min-height", $(window).height());

//Click event handler for nav-items
  $('.navbar-item').on('click',function(){
  //Remove any previous active classes
    $('.navbar-item').removeClass('active');
  //Add active class to the clicked item
    $(this).addClass('active');
});

//Scrollspy
  $('body').scrollspy({ target: '.navbar' });

//Waypoints
  $("#about").waypoint(function(direction) {
    if (direction == "down") {
       var x = document.getElementsByClassName("changeColor");
       var i;
       for (i = 0; i < x.length; i++) {
            x[i].style.color = "black";
          }
     }
    if (direction == "up") {
       var x = document.getElementsByClassName("changeColor");
       var i;
       for (i = 0; i < x.length; i++) {
             x[i].style.color = "white";
         }
      }
  }, {offset: 25});

  });
