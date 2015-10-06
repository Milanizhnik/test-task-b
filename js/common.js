$(document).ready(function() {
	$(".nav li").click(function() {
	$(".nav li").removeClass("active");
	$(this).addClass("active");
	});

	$(".port_item_descr").mouseover(function() {
	$(".port_item_descr").removeClass("active");
	$(this).addClass("active");
	});


	$(".box").click(function() {
	$(".box").removeClass("active");
	$(this).addClass("active");
	});

	$(".popup").hide();
	$("#back-call").click(function(){
	$(".popup").show();
	return false;
	});

	$(".close-button").click(function(){
	$(".popup").hide();
	return false;
	});
});
