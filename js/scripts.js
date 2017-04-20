window.onload = function() {

	var expandedMenu = document.getElementById("expanded-menu");

	smoothScroll.init();

	function hide(element) {
		element.classList.add("hidden");
		//console.log("hide run")
	}

	function show(element) {
		element.classList.remove("hidden");
		//console.log("show run")
	}

	function btnclick() {
		if (expandedMenu.classList.contains("hidden")) {
			show(expandedMenu);
		} else {
			hide(expandedMenu);
		}

		//console.log("btn click run")
	}	

	function linkclick() {
		expandedMenu.classList.add("hidden");
	}

	document.getElementById("hamburger").onclick = btnclick;

	var menulink = document.getElementsByClassName("menulink");

	

	for (var i = 0; i < menulink.length; i++) {
		menulink[i].addEventListener('click', linkclick);
	}

};
