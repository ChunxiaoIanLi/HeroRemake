var socket = io.connect("http://localhost:8000");

socket.on("message",function(data){
	alert("data");
});

function login(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	document.getElementById("test").innerHTML=email + "<br>" + password;
}