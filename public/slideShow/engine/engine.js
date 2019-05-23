//class used to setup all initial css, html, and data values
function Engine(options){
	this.options = options;
	this.slideShowStyles = document.styleSheets[0].cssRules;
	this.mediaWidth = 900;
	this.mediaQueries = window.matchMedia("(min-width: " + this.mediaWidth + "px");
	this.width = window.innerWidth
	console.log(this.slideShowStyles);
	console.log(this.width);
	//if used this method would have to remove media queries then have function to handle resize, which would just set the values
	//console.log("media queries",this.mediaQueries);
	this.initEngine()
	//this.slideShowStyles[1].style.width = "50%";
}

Engine.prototype.initEngine = function() {
	this.mediaQueries.addListener(this.addMediaQueries.bind(this));
	this.initCSS(this.options.cssData);
	if(this.width >= this.mediaWidth){
		this.initCSS(this.options.mediaQueries);
	}
};

Engine.prototype.addMediaQueries = function(event) {
	if(event.matches){
		console.log("add media query");
		this.initCSS(this.options.mediaQueries);
	}
	else{
		console.log("remove media query");
		this.initCSS(this.options.cssData);
	}
};

Engine.prototype.initCSS = function(data) {
	for(let i = 0;i < this.slideShowStyles.length;i++){
		if(this.slideShowStyles[i].type === 1){
			let styleName = this.slideShowStyles[i].selectorText.replace(".","");
			let currentRule = this.slideShowStyles[i];
			//console.log(styleName,this.slideShowStyles[i].type);
			if(data[styleName]){
				//console.log("found style",data[styleName]);
				//only works for non media query styles
				for(let key in data[styleName]){
					currentRule.style[key] = data[styleName][key];
				}
			}
		}	
	}
};

let engine = new Engine(optionData);