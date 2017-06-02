'use strict';
var c=0
var t
var n = 0
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".friends_image h3").click(projectClick);
	$(".btn-success").click(buttonClick);
	$(".btn-danger").click(winExit);
	$(".btn-primary").click(timedCount);
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}
function projectClick(e) { 
    // prevent the page from reloading      
    console.log("projectClick called!");
    e.preventDefault();
    var name = $(this).text();
    name.replace(/\r|\n/ig,""); 
    name.replace(/(^\s*)|(\s*$)/g,"");   
    var newname = anagrammedName(name);
    console.log(name);
    $(this).text(newname);
    
}
function buttonClick(e) {
	console.log("Button clicked!");
	$(this).prop('disabled', true);
	$(this).text("Liked");
	ga("send", "event", "like", "click");
	n = n + 1
	document.getElementById('num').value = n

}

function winExit(e) {
	$(this).prop('disabled', true);
	console.log("Test finished!");
	clearTimeout(t)
	ga("send", "event", "exit", "click");
}

function timedCount(e) {
	$(this).prop('disabled', true);
	document.getElementById('txt').value=c
	c=c+1
	t=setTimeout("timedCount()",1000)
}




