var scroll = 0;
var current = document.getElementById("s1");
document.onkeydown = checkKey;
window.onresize = overflow;

var controls = document.getElementById("controls");

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
	if (current.children[0].offsetTop * 2 < controls.offsetHeight) {
		controls.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	} else {
		controls.style.backgroundColor = "rgba(0, 0, 0, 0)";
	}
	console.log();
}

update();