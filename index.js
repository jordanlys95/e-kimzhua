var counter = 0;

document.ontouchstart = function(e){
    e.preventDefault();
}

$(document).on('touchmove', '.kimzhua', function(e) {
  var xPos = e.originalEvent.touches[0].pageX;
  var yPos = e.originalEvent.touches[0].pageY;
  $(this).css("top",yPos+"px");
});

$(document).on('touchend', '.kimzhua', function(e) {  
	counter++;
	$(".counter").html(counter);
	if(counter > 0){
		$(".helper").css("opacity", "0");
	}
  setTimeout(function() {
    $('body').append('<div class="kimzhua"></div>');
  }, 500);
  $(this).removeClass("kimzhua");
  var dir = Math.floor((Math.random() * 2))==1? '-' : '';
  var deg = (360 + (360 * Math.random()));
  $(this).css("transform","scale(0) rotate("+dir+deg+"deg)");
  $(this).css("box-shadow", "0px 0px 0px rgba(0,0,0,0.75)");
  $(this).css("opacity", "0");
  setTimeout(function(){
    $(this).remove();
  }, 3000);
});