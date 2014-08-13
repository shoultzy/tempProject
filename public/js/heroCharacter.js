;
Quintus.HeroCharacter = function(Q) {
	
	var _angle = 0;
		
	var _scaleWalkSpeedX = 30;
	var _scaleWalkSpeedY = 15;
	var _maxWalkSpeedX = 1.5;
	var _maxWalkSpeedY = 1;
	var _defaultUserPower = 5;

	var _userData = null;
	var _userMovement = false;
	
	var _xMov;
	var _yMov;
	var _player;
	var _snowball;
	var _allowSnowball = true;
	
	Q.Sprite.extend('HeroCharacter', {

		init : function(p) {

			this._super(p, {
				sprite : 'player',
				sheet : 'player_walk_0',
				w : 64,
				h : 64,
				x : 0,
				y : 0,
				gravity : 0,
				points : [[12,42],[52,42],[52,50],[12,50]]
			});
			
			_player = this;
			_player.p.cx = 0;
			_player.p.cy = 0;
			
			_player.add('animation, 2d');
			_player.play('player_walk_0');
		},
				
		step : function(){
			
			if(_userMovement){
				
				_angle = this.getUserAngle(_userData.xVal, Q.width/2, _userData.yVal, Q.height/2);
				_xMov = Math.max(Math.min((_userData.xVal - Q.width/2)/_scaleWalkSpeedX, _maxWalkSpeedX), -_maxWalkSpeedX);
				_yMov = Math.max(Math.min((_userData.yVal - Q.height/2)/_scaleWalkSpeedY, _maxWalkSpeedY), -_maxWalkSpeedY);
				
				_player.p.x += _xMov;
				_player.p.y += _yMov;
												
				if(_angle >= 0 && _angle <= 45) _player.play('player_walk_1');
				else if(_angle >= 46 && _angle <= 90) _player.play('player_walk_2');
				else if(_angle >= 91 && _angle <= 135) _player.play('player_walk_3');
				else if(_angle >= 136 && _angle <= 180) _player.play('player_walk_4');
				else if(_angle >= 181 && _angle <= 225) _player.play('player_walk_5');
				else if(_angle >= 226 && _angle <= 270) _player.play('player_walk_6');
				else if(_angle >= 271 && _angle <= 315) _player.play('player_walk_7');
				else if(_angle >= 316 && _angle <= 360) _player.play('player_walk_8');
			}	
		},
		
		characterMove : function(e) {
			_userMovement = true;
			_userData = e;
		},
		
		characterKillMove : function(){
			_player.play('player_walk_0');
			_userMovement = false;
		},
		
		getUserAngle : function(x1, x2, y1, y2){
			var calcAngle = Math.atan2(x1-x2,y1-y2)*(180/Math.PI);
			
			if(calcAngle < 0){	
				calcAngle = Math.abs(calcAngle);
			}else{
				calcAngle = 360 - calcAngle;		
			}
			
			return calcAngle;
		},
		
		getUserDegrees : function(){
			return _angle;
			console.log(_angle);
		}
	});
}