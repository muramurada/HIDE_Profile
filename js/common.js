  $(function () {
    $('#js-slick01').slick({
      arrows: true, 
      dots: true, 
      appendDots: $('.dots-2'),
      speed: 1000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
    });
  });

  $(function(){
		//クリックで動く
    $('.about--content').hide();
		$('.section-title-about').click(function(){
			$(this).toggleClass('active');
      // alert(this);
			$(this).next('.about--content').slideToggle();
    //   if($(this).hasClass('active')){
		// 	$(this).next().fadeTo(1000, 0);
    // } else {
		// 	$(this).next().fadeTo(1000, 1);
    // }
		});
		//ホバーで動く
		// $('.section-title-about').hover(function(){
		// 	$(this).toggleClass('active');
		// 	$(this).next('.about--content').slideToggle();
		// });
	});