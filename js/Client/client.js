function login(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	document.getElementById("test").innerHTML=email + "<br>" + password;
}