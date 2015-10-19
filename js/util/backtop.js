define(function(require,exports,module){
	var scroll = require("scrollTo");
	function BackTop(el,opts){
		this.opts = $.extend({},BackTop.DEFAULTS,opts);
		this.$el = $(el);
		this.scroll = new scroll.ScrollTo({
			speed:this.opts.speed,
			dest:0
		});
		this._checkPosition();
		this.$el.on('click',$.proxy(this._move,this));
		$(window).on('scroll',$.proxy(this._checkPosition,this));
	}

	BackTop.DEFAULTS = {
		speed:800, //滚动速度
		pos:$(window).height() //backtop 出现高度
	}

	BackTop.prototype._move = function(){
		this.scroll._move();
	}

	BackTop.prototype._checkPosition = function(){
		if($(window).scrollTop() >= this.opts.pos){
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	}

	//注册为jQuery 插件
	$.fn.extend({
		backtop: function(opts){
			return this.each(function(){
				new BackTop(this,opts);
			});
		}
	});

	return {
		BackTop:BackTop
	}

});