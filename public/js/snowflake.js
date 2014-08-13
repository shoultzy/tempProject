;
Quintus.Snowflake = function(Q) {
	
	Q.Sprite.extend('Snowflake', {
				
		init : function(p) {
			
			this._super(p, {
				asset : 'snowball_foreground.png',
				type : 0
			});
			
			this.p.points = [[0,0],[0,0],[0,0],[0,0]];
			this.add("tween");
			this.animateSnowflake(true);
		},
		
		animateSnowflake : function(bln){
			var xVal = Math.random()*Q.width; 
			var yVal = Q.height/2 + Math.random()*Q.height/2;
			var sVal = .5 + Math.random()*.5;
			var xOffset = Math.random()*400;
			var sp = 1 + (sVal*10);
			  
			this.p.x = xVal;
			this.p.scale = sVal;
			
			if(bln){
				this.p.y = Math.random()*Q.height;
				yVal = this.p.y + Math.random()*Q.height/2;
			}else{
				this.p.y = -20;
			}
					
			this.animate({x:xVal - xOffset, y:yVal, scale:0}, sp, {callback:this.animateSnowflake});
			
			_firstRun = false;
		}
	});
}; 