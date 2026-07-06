function login(){

let reg=document.getElementById("regno").value;

let pass=document.getElementById("password").value;

if(reg=="22CS001" && pass=="12345"){

alert("Login Successful");

window.location="dashboard.html";

}

else{

alert("Invalid Login");

}

}
