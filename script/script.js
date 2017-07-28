$(document).ready(function() {

	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		$(".item").imagefill();
	});
	
});

$(window).scroll (function (){
	var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
	$("#progress").width (ratio + "%");
});

