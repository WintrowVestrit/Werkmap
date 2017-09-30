//javascript\\
function makegreen(){

	var h1b = document.getElementsByTagName("h1");
	for(var i = 0; i < h1b.length; i++) {

   h1b[i].style.color = "green";
}
}

function makeSans() {
	
	document.getElementById("comic").style.fontFamily = 'Comic Sans MS';
}

function rotateOff() {
	
	document.getElementById("ass").style = transform: rotate(0deg) 
	
}

function rotateOn() {

	document.getElementById("ass").style = transform: rotate(180deg)	

}