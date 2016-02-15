$(document).ready(function() {

  $(window).scroll(function () {
    //   console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('navbar_fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar').removeClass('navbar_fixed');
    }
  });

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      window.location.hash = hash;
    });
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

  $("#mapMarker").click(function(){
      $(this).popover("toggle");
  });

});

var myCenter = new google.maps.LatLng(24.632629, 46.722104);

function initialize() {
    var mapProp = {
      center:myCenter,
      zoom:12,
      scrollwheel:false,
      draggable:false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
      position:myCenter,
      });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
