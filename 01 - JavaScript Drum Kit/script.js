keys = document.querySelector('.keys');

function playNthAudio(audioTag) {
	sound = document.querySelector(audioTag);
	sound.play();
}

function handleClap() {
	playNthAudio("body > audio:nth-child(2)");
}

function handleHiHat() {
	playNthAudio("body > audio:nth-child(3)");
}

function handleKick() {
	playNthAudio("body > audio:nth-child(4)");
}

function handleOpenHat() {
	playNthAudio("body > audio:nth-child(5)");
}

function handleBoom() {
	playNthAudio("body > audio:nth-child(6)");
}

function handleRide() {
	playNthAudio("body > audio:nth-child(7)");
}

function handleSnare() {
	playNthAudio("body > audio:nth-child(8)");
}

function handleTom() {
	playNthAudio("body > audio:nth-child(9)");
}

function handleTink() {
	playNthAudio("body > audio:nth-child(10)");
}

document.addEventListener('keydown', function (e) {
	console.log('hello');
	console.log((e.key));
	switch (e.key) {
		case 'a':
			handleClap();
			break;
		case 's':
			handleHiHat();
			break;
		case 'd':
			handleKick();
			break;
		case 'f':
			handleOpenHat();
			break;
		case 'g':
			handleBoom();
			break;
		case 'h':
			handleRide();
			break;
		case 'j':
			handleSnare()
			break;
		case 'k':
			handleTom();
			break;
		case 'l':
			handleTink();
			break;
	}
})