;
Quintus.UserWeaponSnowball = function(Q) {

	var _radians = 0;
	var _maxUserPower = 500;
	var _minUserPower = 100;
	var _snowballTrajectory = 50;

	var _snowballContext;
	var _snowballContainer;
	var _snowballGraphic;
	var _snowballShadow;
	var _animSpeed;
	var _xVal;
	var _yVal;

	Q.Class.extend("UserWeaponSnowball", {
		init : function() {
		},

		initNewSnowball : function() {

			_snowballContext = this;
			_snowballContainer = new Q.Sprite({
				type : 0
			});

			_snowballGraphic = new Q.Sprite({
				asset : 'throw_snowball.png',
				opacity : 0,
				type : 0,
			});

			_snowballShadow = new Q.Sprite({
				asset : 'throw_snowball_shadow.png',
				opacity : 0,
				type : 0,
			});

			_snowballContainer.add("tween");
			_snowballShadow.add("tween");
			_snowballGraphic.add("tween");

			_snowballGraphic.p.points = [[0, 0], [16, 0], [16, 16], [0, 16]];

			$mainStage.insert(_snowballContainer);
			$mainStage.insert(_snowballShadow, _snowballContainer);
			$mainStage.insert(_snowballGraphic, _snowballContainer);

			_snowballContainer.p.x = $player.p.x + 32;
			_snowballContainer.p.y = $player.p.y + 32;

		},

		throwSnowball : function(p) {
			
			var snowballShadow = _snowballShadow;
			var snowballGraphic = _snowballGraphic;
			var snowballContainer = _snowballContainer;			
			
			_radians = ($player.getUserDegrees() + 90) * Math.PI / 180;
			_power = _minUserPower + Math.min(_maxUserPower, p);

			_xVal = Math.cos(_radians) * _power;
			_yVal = Math.sin(_radians) * _power;
			_animSpeed = _power / 400

			_snowballContainer.p.x = $player.p.x + 32;
			_snowballContainer.p.y = $player.p.y + 32;

			_snowballGraphic.p.opacity = 1;
			_snowballShadow.p.opacity = .1;

			_snowballContainer.animate({
				x : ($player.p.x + 32) + (_xVal),
				y : ($player.p.y + 32) + (_yVal)
			}, _animSpeed, Q.Easing.Linear);
			
			_snowballGraphic.animate({
				y : _snowballGraphic.p.y - _snowballTrajectory
			}, _animSpeed / 2, Q.Easing.Quadratic.Out).chain({
				y : _snowballGraphic.p.y
			}, _animSpeed / 2, Q.Easing.Quadratic.In, {
				callback : function() {
					snowballShadow.destroy();
					snowballGraphic.destroy();
					snowballContainer.destroy();
				}
			});
		}
	});
}; 