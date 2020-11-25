alert("Hello there! I am your pet emoji");

function emojiGreets(){
	let name = prompt("What is your name? Type your name here..." );
	if(name){
		alert("Nice to meet you, " +  name + ".");
		document.getElementById("emoji").src = "images/smiley-emoji.jpg";
	}
}