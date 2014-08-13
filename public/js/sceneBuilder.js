;
Quintus.SceneBuilder = function(Q) {

	Q.scene("mainWorld", function(stage) {

		$mainStage = stage;

		$terrain = stage.insert(new Q.TerrainBuilder());
		$player = stage.insert(new Q.HeroCharacter());
		$userWeapon = new Q.UserWeapon();
		
		stage.add("viewport").follow($player);
	});
	
	Q.scene("terrainBase", function(stage) {
		$baseStage = stage;
		$terrainBase = stage.insert(new Q.TerrainBase());	
	});
	
	Q.scene("foreground", function(stage) {
		$topStage = stage;
		$snowfall = new Q.Snowfall();
	});
	
	Q.scene("ui", function(stage) {
		$uiStage = stage;
	});
}