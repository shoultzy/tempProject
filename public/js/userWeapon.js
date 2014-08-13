;
Quintus.UserWeapon = function(Q) {
		
	var _userPower = 0;
	var _allowInit = true;
	var _powerTimeout;
	var _newUserWeapon;

	Q.Class.extend("UserWeapon", {
		init : function() {
			Q.input.on('fire', this, 'initWeapon');
			Q.input.on('fireUp', this, 'releaseWeapon');
		},
		
		releaseWeapon : function(){
			
			_newUserWeapon.throwSnowball(_userPower);
							
			_userPower = 0;
			_allowInit = true;
			clearTimeout(_powerTimeout);
		},
		
		initWeapon : function(){
															
			if(_allowInit){
				
				_newUserWeapon = new Q.UserWeaponSnowball();
				_newUserWeapon.initNewSnowball();
				
				_allowInit = false;
				_powerTimeout = setInterval(this.onUserPower, 10);
			}			
		},
		
		onUserPower : function(){
			_userPower+=5;
		}
	});
};