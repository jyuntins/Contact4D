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

		// Initialize carousels
    bulmaCarousel.attach('#dataset-carousel', options);
    bulmaCarousel.attach('#text2motion-carousel', options);
    bulmaCarousel.attach('#mocap-carousel', options);

    bulmaSlider.attach();

})
