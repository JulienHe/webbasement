//Basic variable
var mathem, dataHeight,opacityElement, position;

//Responsive navigation
// var navigation = responsiveNav(".nav", {
// 	customToggle: ".nav-toggle"
// });

//Scroll item 
$(window).scroll(function(){
	mathem = $(this).scrollTop(),
	dataHeight = $('[data-background]').outerHeight() / 100;
	opacityElement = mathem / dataHeight,
	position = -mathem / 2;

	$('[data-background]').css({'background-position' : "0 " + position +"px"});
	opacityElement = parseFloat(1 - (opacityElement / 100));
	$('[data-context]').css({
		'padding-top' : -position,
		'opacity' : opacityElement
	});
});

//Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-21761886-1', 'webbasement.be');
ga('send', 'pageview');

//slider
$('.uneven').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
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