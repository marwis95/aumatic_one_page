$(function() {

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 330) {
	  player.pauseVideo();
    }
});

});