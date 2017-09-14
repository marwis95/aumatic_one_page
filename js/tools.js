$(function() {
    $('#sidenav a').click(function (e) {
        e.preventDefault();
        
        simpleScrollTo($(this).attr('href'), 1000);
    });
    
    $(window).scroll(function() {
        var ds = $(document).scrollTop();

		
        if (ds == 0) {
            $('#sidenav a').removeClass('active');
			$('#sidenav a').parent().removeClass('active');
            $('#sidenav a[href=#' + $('.anchor').eq(0).attr('id') + ']').addClass('active');
			$('#sidenav a[href=#' + $('.anchor').eq(0).attr('id') + ']').parent().addClass('active');
            
            return false;
        }
        
        $('.anchor').each(function() {
            var $this = $(this), offset = Math.round($this.offset().top), height = $this.outerHeight() + offset;
            
            if (offset <= ds && height > ds) {
                $('#sidenav a').removeClass('active');
				$('#sidenav a').parent().removeClass('active');
                $('#sidenav a[href=#' + $this.attr('id') + ']').addClass('active');
				$('#sidenav a[href=#' + $this.attr('id') + ']').parent().addClass('active');
                if (document.location.hash != '#' + $this.attr('id')) {
                    var cds = $(document).scrollTop();
                    document.location.hash = $this.attr('id');
                    $(document).scrollTop(cds);
                }
                
                return false;
            }
            
            return true;
        });
        
        return true;
    });
    
    var ds = $(window).scrollTop();
    if (ds == 0) {
        $('#sidenav a').removeClass('active');
		$('#sidenav li').parent().removeClass('active');
        $('#sidenav a[href=#' + $('.anchor').eq(0).attr('id') + ']').addClass('active');
        $('#sidenav a[href=#' + $('.anchor').eq(0).attr('id') + ']').parent().addClass('active');
    } else {
        $('.anchor').each(function() {
            var $this = $(this), offset = Math.round($this.offset().top), height = $this.outerHeight() + offset;

            if (offset <= ds && height > ds) {
				
                $('#sidenav li').removeClass('active');
				$('#sidenav li').parent().removeClass('active');
				
                $('#sidenav a[href=#' + $this.attr('id') + ']').addClass('active');
				$('#sidenav a[href=#' + $this.attr('id') + ']').parent().addClass('active');

                return false;
            }

            return true;
        });
    }
     
    if (document.location.hash != '') {
        var el = $(document.location.hash);
        if (el.length > 0) {
            $(window).scrollTop(0);
            $(window).load(function() {
                simpleScrollTo('#' + el.attr('id'), 1000);
            });
        }
    }
	
	stopPlaying();

});

function simpleScrollTo(element, speed) {
    $('html:not(:animated), body:not(:animated)').animate({scrollTop: $(element).offset().top}, speed, function() {
        document.location.hash = $(element).attr('id');
    });
}

function stopPlaying () {
	
	var video = $( "#player" );
	var position = video.position();
	var middlePosition = position.top + 180;
	
    $(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if(scroll > middlePosition) {
			player.pauseVideo();
		}
	})
}

			/*var tlo=1;
			
			setTimeout ( "ZmianaObrazka()", 6000 );
			function ZmianaObrazka ( ){
			
			switch (tlo) {
			case 1:
			$("#container_welcome").addClass('container_welcome_1');
				$("#container_welcome").removeClass('container_welcome_3');
				
				tlo = 2;
				console.log(tlo);
				break;
			case 2:
			$("#container_welcome").addClass('container_welcome_2');
				$("#container_welcome").removeClass('container_welcome_1');
				
				tlo = 3;
				console.log(tlo);
				break
			case 3:
			$("#container_welcome").addClass('container_welcome_3');
				$("#container_welcome").removeClass('container_welcome_2');
				
				tlo = 1;
				console.log(tlo);
				break;

			}
				
				setTimeout ( "ZmianaObrazka()", 6000 );
				
			}*/

