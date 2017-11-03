var scroll = 0;

var position = 0;
var velocity = 0;
var tid = 0;
var time = 0;
var on = 0;

var current = document.getElementById("s1");
document.onkeydown = checkKey;
window.onresize = overflow;

var controls = document.getElementById("controls");
var bar = document.getElementById("bar");

function checkKey(e) {
	"use strict";
	if (e.keyCode == "37") {
		scroll--;
	} else if (e.keyCode == "39") {
		scroll++;
		console.log("as");
	}
	update();
}

function skip(x) {
	"use strict";
	scroll = x;
	update();
}

function update() {
	"use strict";
	if (scroll < 0) {
		scroll = 0;
	} else if (scroll > 4) {
		scroll = 4;
	}
	var passed = -1;
	for (var i = 0; i < 5; i++) {
		var slide = document.getElementById("s" + (i + 1));
		if (i === Math.floor(scroll)) {
			passed = 1;
			slide.style.transform = "translate(0, 0)";
			controls.children[i].style.backgroundColor = "#999";
			current = slide;
		} else {
			var x = i - Math.floor(scroll);
			if (x > 0) {
				x++;
			}
			slide.style.transform = "translate(" + (50 * x) + "%, 0)";
			controls.children[i].style.backgroundColor = "#666";
		}
	}
	overflow();
}

function overflow() {
	"use strict";
	console.log("d");
	if (current.children[0].offsetTop * 2 < controls.offsetHeight) {
		controls.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
		bar.style.visibility = "visible";
		bar.style.opacity = "1";
	} else {
		controls.style.backgroundColor = "rgba(0, 0, 0, 0)";
		bar.style.visibility = "hidden";
		bar.style.opacity = "0";
	}
	position = 0;
	current.children[0].style.transform = "translate(0, 0)";
}

function move(x) {
	"use strict";
	velocity = x;
	time = 0;
	on = 2;
	if (tid == 0) {
		tid = setInterval(repeat, 1000 / 60);
	}
	
}

function stop() {
	"use strict";
	if (time > 0) {
		on = 0;
		console.log(on);
	}
}

document.getElementById("up").addEventListener("touchstart", function() {
	"use strict";
	move(1);
});
document.getElementById("down").addEventListener("touchstart", function() {
	"use strict";
	move(-1);
});
document.getElementById("up").addEventListener("touchend", function() {
	"use strict";
	stop();
});
document.getElementById("down").addEventListener("touchend", function() {
	"use strict";
	stop();
});

function repeat() {
	"use strict";
	time -= 1 - on;
	position += time * velocity;
	var limit = window.innerHeight - controls.offsetHeight - current.children[0].scrollHeight;
	if (position > 0) {
		position = 0;
	} else if (position < limit) {
		position = limit;
	}
	current.children[0].style.transform = "translate(0, " + position + "px)";
	if (time === 0 || position === 0 || position === limit) {
        clearInterval(tid);
        tid = 0;
	}
}

update();