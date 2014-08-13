;
Quintus.Snowfall = function(Q) {

	Q.Class.extend("Snowfall", {
		init : function() {
			for(var i = 0; i < 40; i++){
				_snow = $topStage.insert(new Q.Snowflake());
			}
		}
	});
};