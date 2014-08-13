;
Quintus.TerrainBase = function(Q) {
	
	var edgeThreshold = 40;
	
	var _terrainBase;
	var _userData;
	
	Q.Sprite.extend('TerrainBase', {

		init : function(p) {
			
			this._super(p, {
				asset : "background_base.png",
				x : Q.width/2,
				y : Q.height/2,
				scale : 500
				//type : 1
			});
			
			_terrainBase = this;
			
			this.on("touch");
			this.on("touchEnd");
		},
		
		touch : function(touch){
			_userData = {xVal:touch.x, yVal:touch.y};
			$player.characterMove(_userData);

			Q.el.addEventListener('mousemove', _terrainBase.checkUserPress, true);
		},
		
		touchEnd : function(touch){
			Q.el.removeEventListener('mousemove', _terrainBase.checkUserPress, true);
			$player.characterKillMove();
		},
		
		checkUserPress : function(e){
			
			_userData = {xVal:e.clientX, yVal:e.clientY};
			
			// checks that the user press is within the bounds of the stage
			if(_userData.xVal < (Q.width - edgeThreshold) && _userData.yVal < (Q.height - edgeThreshold) && _userData.xVal > edgeThreshold && _userData.yVal > edgeThreshold){
				$player.characterMove(_userData);
			}else{
				Q.el.removeEventListener('mousemove', _terrainBase.checkUserPress, true);
				$player.characterKillMove();
			}
		}
	});
}