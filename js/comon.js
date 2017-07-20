$(function(){
	//二级菜单
	var drop = false;
	$('.menu').click(function(){
		if(!drop){
			$('.menu').addClass('active');
			drop = !drop;
			//弹出二级菜单的时候，设置整个页面在y轴上不能够滚动
			$('body').css({"overflow-y":"hidden"});
		}else{
			$('.menu').removeClass('active');
			drop = !drop;
			//收回二级菜单的时候，设置整个页面在y轴上能够滚动
			$('body').css({"overflow-y":"auto"});
		}
		$('.drop-menu').slideToggle();
	});
	//判断页面滚动方向
	var before = $(window).scrollTop();
    $(window).scroll(function() {
        var after = $(window).scrollTop();
        if (before<after) {//如果前一次滚动值小于下一次滚动值，说明向下滚动
//      console.log('下');
            before = after;
            $('.navbar-header').css({"transform":"translateY(-50px)"});
        };
        if (before>after) {//如果前一次滚动值大于下一次滚动值，说明向上滚动
//      console.log('上');
            before = after;
            $('.navbar-header').css({"transform":"translateY(0)"});
        };
    });
    
    //注册登录页面的动画效果
    $('.login-input').css({"background-size":40/50+'rem'});
	$('.login-input').focus(function(){
		$(this).css({"background-size":50/50+'rem'});
	}).blur(function(){
		$(this).css({"background-size":40/50+'rem'});
	});
	
	$('.login-input').keyup(function(){
		if($(this).val()!=''){
			$(this).next().fadeIn();
		}else{
			$(this).next().fadeOut();
		}
	})
	$('.clean-input').click(function(){
		$(this).siblings().val('');
		$('.clean-input').fadeOut();
	});
	
	//寻求报道页面
	$('.industry-list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
});
