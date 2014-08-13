window.addEventListener('load', function() {

	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;

	var Q = window.Q = Quintus().include("Sprites, Scenes, Input, 2D, Touch, UI, Anim").include("UserWeaponSnowball, UserWeapon, Snowflake, Snowfall, TerrainBase, TerrainBuilder, SceneBuilder, HeroCharacter")
	Q.setup({
		maximize : true,
		width : w,
		height : h
	}).controls().touch(Q.SPRITE_ALL);

	var $baseStage;
	var $mainStage;
	var $topStage;
	var $uiStage;
	var $player;
	var $userWeapon;

	//Q.debug = true;

	// ------------------------------------------------------------

	Q.load('throw_snowball_shadow.png, throw_snowball.png, snowball_foreground.png, background_texture.png, background.png, background_base.png, character_sprites.png, characterSprites_data.json', function() {

		Q.compileSheets('character_sprites.png', 'characterSprites_data.json');

		Q.animations("player", {

			player_walk_0 : {
				frames : [0, 1, 2, 3, 4, 5],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_1 : {
				frames : [6, 7, 8, 9, 10, 11],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_2 : {
				frames : [12, 13, 14, 15, 16, 17],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_3 : {
				frames : [18, 19, 20, 21, 22, 23],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_4 : {
				frames : [24, 25, 26, 27, 28, 29],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_5 : {
				frames : [30, 31, 32, 33, 34, 35],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_6 : {
				frames : [36, 37, 38, 39, 40, 41],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_7 : {
				frames : [42, 43, 44, 45, 46, 47],
				rate : 1 / 1,
				loop : true,
			},
			player_walk_8 : {
				frames : [48, 49, 50, 51, 52, 53],
				rate : 1 / 1,
				loop : true,
			}
		});

		Q.stageScene('terrainBase', 1);
		Q.stageScene('mainWorld', 2);
		Q.stageScene('foreground', 3);
	});
});
