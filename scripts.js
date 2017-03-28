window.onload = function() {

	var expandedMenu = document.getElementById("expanded-menu");

	function hide(element) {
		element.classList.add("hidden");
		console.log("hide run")
	}

	function show(element) {
		element.classList.remove("hidden");
		console.log("show run")
	}
			
	function btnclick() {
		if (expandedMenu.classList.contains("hidden")) {
			show(expandedMenu);
		} else {
			hide(expandedMenu);
		}

		console.log("btn click run")
	}	

	document.getElementById("hamburger").onclick = btnclick;
};

