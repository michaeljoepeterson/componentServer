function Engine(options,mediaWidth,componentId){
	this.options = options;
	this.mediaWidth = mediaWidth;
	this.componentId = componentId;
	this.componentStyles = document.styleSheets[0].cssRules;
	this.mediaQueries = window.matchMedia("(min-width: " + this.mediaWidth + "px");
	this.width = window.innerWidth;
	this.initEngine();
} 

Engine.prototype.initEngine = function() {
	//event listener for when window hits media query size
	this.mediaQueries.addListener(this.addMediaQueries.bind(this));
	this.initCSS(this.options.cssData);
	if(this.width >= this.mediaWidth){
		this.initCSS(this.options.mediaQueries);
	}
};

//changes rules if the media width is reached
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
	for(let i = 0;i < this.componentStyles.length;i++){
		if(this.componentStyles[i].type === 1){
			let styleName = this.componentStyles[i].selectorText.replace(".","");
			let currentRule = this.componentStyles[i];
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

//let navEngineStart = new Engine(navData,navData.mediaWidth,"nav-desk");