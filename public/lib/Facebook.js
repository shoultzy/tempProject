/**
 * @author Matt Shoult
 */

window.fbAsyncInit = function() {
	console.log('pageloaded');
	
	FB.init({
		appId : '1465559923687134', // Set YOUR APP ID
		status : true, // check login status
		cookie : true, // enable cookies to allow the server to access the session
		xfbml : true // parse XFBML
	});

	FB.Event.subscribe('auth.authResponseChange', function(response) {
				
		if (response.status === 'connected') {
			console.log('connected');
			//document.getElementById("message").innerHTML += "<br>Connected to Facebook";
			//success
		} else if (response.status === 'not_authorized') {
			console.log('not_authorized');
			//document.getElementById("message").innerHTML += "<br>Failed to Connect";
			//failed
		} else {
			console.log('logged_out');
			//document.getElementById("message").innerHTML += "<br>Logged Out";
			//unknown error
		}
	});
	
	Login();
};

function Login() {

	FB.login(function(response) {
		if (response.authResponse) {
			getUserFriends();
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {
		scope : 'user_friends, read_friendlists,email,user_photos,user_videos'
	});

}

function getUserInfo() {
	FB.api('/me', function(response) {
		
		console.log("name:  ", response.name);
		console.log("link:  ", response.link);
		console.log("username:  ", response.username);
		console.log("id:  ", response.id);
		console.log("email:  ", response.email);
		
		getUserFriends();
	});
}

function getUserFriends() {
	FB.api('/me/invitable_friends', function(response) {
		
		console.log("friends:  ", response);
	});
}

function getPhoto() {
	FB.api('/me/picture?type=normal', function(response) {

		/*var str = "<br/><b>Pic</b> : <img src='" + response.data.url + "'/>";
		document.getElementById("status").innerHTML += str;*/

	});

}

function Logout() {
	FB.logout(function() {
		document.location.reload();
	});
}

// Load the SDK asynchronously
( function(d) {
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document)); 
