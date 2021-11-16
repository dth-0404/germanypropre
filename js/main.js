$(document).ready(function() {
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
      .on('show.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').addClass('active');
      })
      .on('hide.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').removeClass('active');
      });
  });

	$(document).ready(function () {
		$(".review").owlCarousel({
      dots: true,
      loop: false,
      margin:10,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
			responsive: {
				0: { items: 1 },
				420: { items: 2 },
				1000: { items: 3 },
				1280: { items: 3 },
				1680: { items: 3 },
				1920: { items: 3 },
			},
		});
  });
  
// var mybutton = document.getElementById("myBtn-scrTop");
// var callbutton = document.getElementById("callBtn")

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//     callbutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//     callbutton.style.display = "none"
//   }
// }
$(function(){
  $(window).scroll(function(){    
    if($(this).scrollTop()>= '200'){
      $('#myBtn-scrTop, #callBtn').fadeIn()
    }
    else{
      $('#myBtn-scrTop, #callBtn').fadeOut()
    }
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}