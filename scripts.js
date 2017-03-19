window.onload = function() {

	var expandedMenu = document.getElementById("expanded-menu");

	function hide(element) {
		element.className += "hidden";
		console.log("hide run")
	}

	function show(element) {
		element.className -= "hidden";
		console.log("show run")
	}
			
	function btnclick(element) {
		if (element.className.includes("hidden")) {
			show(element);
		} else {
			hide(element);
		}

		console.log("btn click run")
	}	

	document.getElementById("hamburger").onclick = btnclick(expandedMenu);
};

