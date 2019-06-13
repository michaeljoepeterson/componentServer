//use this object to hold options for css, javascript, and html?
const optionData = {
	//all the various classes and their options
	cssData:{
		slideShowContainer:{
			width: "100%",
			maxWidth: "1000px",
			height: "100vh"
		},
		arrow:{
			top: "40%",
			zIndex: "100"
		},
		slideShowImage:{
			height: "50vh",
			width: "50%",
			transition: "width 1s, height 1s, transform 1s, top 1s,left 1s"
		},
		firstImage:{
			zIndex: "50",
			height: "100vh",
			width: "100%"
		}
	},
	mediaQueries:{
		imgContainer:{
			height: "80vh"
		},	

		slideShowContainer:{
			height: "80vh"
		},

		slideShowImage:{
			height: "40vh"
		},

		firstImage:{
			height: "80vh"
		}
	},

	htmlData:{
		images:[
			"images/img1.JPG",
			"images/img2.JPG",
			"images/img3.JPG",
			"images/img1.JPG"
		]
	},
	jsData:{
		imageMoveTime:1100,
		maxWidth:1000
	}
};