requirejs.config({
	paths:{
		jquery:"../public/jquery/jquery.min",
		scrollTo:"../util/scrollto"
	}
});
requirejs(['../util/backtop'],function(scrollto){
	// var scroll = new scrollto.ScrollTo();
	// $("#goTop").on('click',function(){
	// 		scroll._move();
	// });	
	$("#goTop").backtop({
		speed:2000,
		pos:100
	});
});