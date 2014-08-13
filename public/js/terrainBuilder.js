;
Quintus.TerrainBuilder = function(Q) {
	
	var _terrain;
		
	Q.Sprite.extend('TerrainBuilder', {

		init : function(p) {

			this._super(p, {
				x : 0,
				y : 0,
				type:0
			});
			
			var _terrainTexture = new Q.Repeater({
				type : 0,
				asset : "background_texture.png",
				points : [[0,0],[0,0],[0,0],[0,0]]
			});

			$mainStage.insert(_terrainTexture);			
		},
		step : function() {
		}
	});
}