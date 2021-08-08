$(document).ready(function () {

	$('#comp_slider.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})

	// price btn
	$('#p_btn1').addClass('active');
	$('#card_1').addClass('sdw');
	$('#card_2').removeClass('sdw');
	$('#card_2').addClass('bdr');

	$('#p_btn1').click(function(){
		$('#p_btn1').addClass('active');
		$('#p_btn2').removeClass('active');
		$('#card_1').addClass('sdw');
		$('#card_1').removeClass('bdr');
		$('#card_2').removeClass('sdw');
		$('#card_2').addClass('bdr');
	});
	$('#p_btn2').click(function(){
		$('#p_btn2').addClass('active');
		$('#p_btn1').removeClass('active');
		$('#card_2').addClass('sdw');
		$('#card_2').removeClass('bdr');
		$('#card_1').removeClass('sdw');
		$('#card_1').addClass('bdr');
	});

// testimonial slider

$('#test_slider.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
})
$('#test_slider .owl-next span').addClass('t_btn_focus');

$('#test_slider .owl-prev span').hover(function(){
	$('#test_slider .owl-next span').toggleClass('t_btn_focus');
	$('#test_slider .owl-prev span').toggleClass('t_btn_focus');
});

});