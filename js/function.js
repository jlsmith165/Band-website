//Slick Slider//
$(document).ready(() => {
    $('#slideshow .responsive').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

});


//Lightbox//
const { $container } = require("./lightbox");


//myBtn//

var mybutton = document.getElementsById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Modal Video//
$(document).ready(function() { 
  var url = $("#myVideo").attr('src'); 
  $("#myModal").on('hide.bs.modal', function() { 
      $("#myVideo").attr('src', ''); 
  }); 
  $("#myModal").on('show.bs.modal', function() { 
      $("#myVideo").attr('src', url); 
  });

});
