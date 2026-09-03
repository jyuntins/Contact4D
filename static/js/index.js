window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

    // dataset-carousel holds wide 4-panel videos -- one at a time so each
    // panel stays legible, instead of 3 across.
    var singleOptions = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 6000,
    }

		// Initialize carousels
    bulmaCarousel.attach('#dataset-carousel', singleOptions);
    bulmaCarousel.attach('#text2motion-carousel', options);

    bulmaSlider.attach();

})
