window.onload = function() {

	smooth_scroll.init();
	
	var expandedMenu = document.getElementById("expanded-menu");

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

	document.getElementById("hamburger").onclick = btnclick;


	function scrollToElement(elementId) {
		document.querySelector(elementId).scrollIntoView({ 
  			behavior: 'smooth' 
		});
	}

	document.getElementById("menuportfolio").onclick = scrollToElement("portfolio");

	document.getElementById("menuabout").onclick = scrollToElement("about");

	document.getElementById("menucontact").onclick = scrollToElement("contact");
};

