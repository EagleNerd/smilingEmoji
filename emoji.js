var userName;
function emojiGreets(){
	if (navigator.cookieEnabled)
	userName = readCookie("Emotional_emoji");
	if (userName)
		alert("Hello " + userName + ", I missed you.");
	  else
		alert("Hello there! I am your pet emoji");
	
}
function touchEmoji(){
	if (userName){
		alert("I like the attention, " + userName +". Thank you.")

	} else {

		userName = prompt("What is your name?", "Enter your name here.");

	if (userName){
		alert("It's my pleasure to meet you, " + userName + ".");

		if (navigator.cookieEnabled)
		writeCookie("Emotional_emoji", userName, 2 * 365);
	  else
	  alert("Sorry, cookies aren't supported/enabled on your browser. I won't remember you later.")
	}
		document.getElementById('emoji').src = 'images/smiley-emoji.jpg';
		setTimeout("document.getElementById('emoji').src = 'images/waving-emoji.jpg';", 6000);
	}
	
}
function resizeEmoji(){
	document.getElementById("emoji").style.height = (document.body.clientHeight-100) * 0.7; /* subtract 100px to account for the vertical position of the image, multiplied by 70% of the remaining window size. */
}