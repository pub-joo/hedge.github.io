window.onload = function(){
    $('.dialog-open').click(function(){
        console.log('띠용');
        $('.dialog').addClass('-active');
    });
    $('.dialog-close').click(function(){
        console.log('닫힘');
        $('.dialog').removeClass('-active');
    });





    $('.menu-open').click(function(){
		$('.menu-wrap').stop().show().animate({"right":"0"},300);
        $('.menu-dim').fadeIn(300);
	}); 
    $('.menu-close, .menu-dim').click(function(){
		$('.menu-wrap').stop().animate({"right":"-100%"},300).hide(300);
        $('.menu-dim').fadeOut(300);
	}); 
    
















}