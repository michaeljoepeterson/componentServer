//class used to setup all initial css, html, and data values
function Engine(options){
	this.options = options;
	this.slideShowStyles = document.styleSheets[0].cssRules;
	console.log(this.slideShowStyles);
	this.initCSS();
	//this.slideShowStyles[1].style.width = "50%";
}

Engine.prototype.initEngine = function() {
	
};

Engine.prototype.initCSS = function() {
	for(let i = 0;i < this.slideShowStyles.length;i++){
		if(this.slideShowStyles[i].type === 1){
			let styleName = this.slideShowStyles[i].selectorText.replace(".","");
			console.log(styleName,this.slideShowStyles[i].type);
			if(this.options.cssData[styleName]){
				console.log("found style",this.options.cssData[styleName]);
			}
		}	
	}
};

let engine = new Engine(optionData);