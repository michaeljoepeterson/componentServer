//use this object to hold options for css, javascript, and html?
const navData = {
	mediaWidth:550,
	//all the various classes and their options
	cssData:{
		"nav-container":{
			backgroundColor: "rgb(255,255,255)",
			height: "65px",
			"border-bottom": "1px solid rgb(240,240,240)",
			"display": "none"
		},
		"nav-items":{
			top: "13.5px"
		},

		"logo-img":{
			"max-width": "67px",
			"left": "5px",
			"top": "8px"
		},
		"nav-title":{
			"left":"70px",
			"margin": "0px",
			"top":"18.5px"
		},
		"nav-container-mobile":{
			"background-color": "rgb(255,255,255)",
			"border-bottom": "1px solid rgb(240,240,240)",
			"display": "block"
		},

		"mobile-items-container":{
			"width":"50%",
			"background-color": "white",
			"display": "block"
		},
		"no-scroll":{
			"overflow": "hidden",
			"background-color": "rgba(0,0,0,0.5)"
		}

	},
	mediaQueries:{
		"nav-container":{
			"display": "block"
		},

		"nav-container-mobile":{
			"display": "none"
		},

		"mobile-items-container":{
			"display": "none"
		},

		"no-scroll":{
			"overflow": "initial",
			"background-color": "rgba(0,0,0,0)"
		}
	},

	htmlData:{
		title:"Rosie's Donuts Test",
		navOptions:{
			"About":"/about",
			"Contact":"/contact",
			"Test":"/",
			"Test2":"ign.com"
		}	
	},
	jsData:{

	}
};