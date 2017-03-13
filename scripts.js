window.onload = function() {

	var expandedMenu = document.getElementById("expanded-menu");

	function hide(element) {
		element.className -= "hidden";
	}

	function show(element) {
		element.className += "hidden";
	}
			
	function btnclick() {
		if (expandedMenu.className.includes("hidden")) {
			show(expandedMenu);
		} else {
			hide(expandedMenu);}
	}	

	document.getElementById("hamburger").onclick = btnclick();

}