define(function(require,exports,module){
	var $ = require('jquery');
	
	function ScrollTo(opts){
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
		this.$el = $("html, body");
	}

	ScrollTo.DEFAULTS = {
		speed:800,
		dest:0
	};
	//滚动条滚动到制定位置
	ScrollTo.prototype._move = function() {
		var opts = this.opts;
		if(opts.dest != $(window).scrollTop()){
			if(!this.$el.is(":animated")){
				this.$el.animate({
						scrollTop: opts.dest
					},
					opts.speed
				);	
			}
		}
		
	};

	return {
		ScrollTo:ScrollTo
	}

});