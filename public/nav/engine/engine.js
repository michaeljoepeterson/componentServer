function Engine(options,mediaWidth,componentId){
	this.options = options;
	this.mediaWidth = mediaWidth;
	this.componentId = componentId;
	this.componentStyles = document.styleSheets[0].cssRules;
	this.mediaQueries = window.matchMedia("(min-width: " + this.mediaWidth + "px");
	this.width = window.innerWidth;
} 

Engine.prototype.initEngine = function() {
	//event listener for when window hits media query size
	this.mediaQueries.addListener(this.addMediaQueries.bind(this));
	this.initCSS(this.options.cssData)w;
	if(this.width >= this.mediaWidth){
		this.initCSS(this.options.mediaQueries);
	}
	this.initHTML();
};

Engine.prototype.initHTML = function(){
	let slideShowImages = []; 
	//console.log(this.slideShowContainer);
	for(let i = 0;i < this.options.htmlData.images.length;i++){

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