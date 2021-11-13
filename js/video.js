var video=document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	video.play();
	var videoVolume = document.getElementById("slider").value;
	video.volume = videoVolume/100;
	document.getElementById("volume").innerHTML = videoVolume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var videoSpeed = video.playbackRate;
	videoSpeed *= 0.95;
	video.playbackRate = videoSpeed;
	console.log("New speed is " + videoSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	var videoSpeed = video.playbackRate;
	videoSpeed /= 0.95;
	video.playbackRate = videoSpeed;
	console.log("New speed is " + videoSpeed);
});

document.querySelector("#skip").addEventListener("click", function() {
	var videoTime = video.currentTime;
	console.log("Original location " + videoTime);
	videoTime += 15;
	if (videoTime >= video.duration) {
		videoTime = 0;
		console.log("Going back to beginning")
	}
	video.currentTime = videoTime;
	console.log("New location " + videoTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var videoVolume = document.getElementById("slider").value/100;
	var isMute = document.getElementById("mute").innerHTML;
	if (isMute == "Mute") {
		document.getElementById("mute").innerHTML = "Unmute";
		video.volume = 0;
	}
	else {
		document.getElementById("mute").innerHTML = "Mute";
		video.volume = videoVolume;
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	var videoVolume = this.value;
	video.volume = videoVolume/100;
	document.getElementById("volume").innerHTML = videoVolume + "%";
	console.log(video.volume);	
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

