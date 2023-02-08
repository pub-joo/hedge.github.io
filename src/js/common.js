$(function(){
    /* menu */
    $('.menu-open').click(function(){
		$('.menu-wrap').stop().show().animate({"right":"0"},300);
        $('.menu-dim').fadeIn(300);
	}); 
    $('.menu-close, .menu-dim').click(function(){
		$('.menu-wrap').stop().animate({"right":"-100%"},300).hide(300);
        $('.menu-dim').fadeOut(300);
	}); 
    

    /* btmsheet */
    var openSheetBtn = $(".btn-btm-open");
    var closeSheetBtn = $(".btn-btm-close, .btm-dim");
    var sheet = $(".btm-sheet");
    openSheetBtn.click(function(){
        sheet.attr('aria-hidden', 'false')
    }); 
    closeSheetBtn.click(function(){
        sheet.attr('aria-hidden', 'true')
    }); 
    





})
//end







