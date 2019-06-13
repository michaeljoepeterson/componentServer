//class used to setup all initial css, html, and data values
//subclass this class for each specific component
function Engine(options,mediaWidth,slideShowId){
	this.options = options;
	this.slideShowStyles = document.styleSheets[0].cssRules;
	this.mediaWidth = mediaWidth;
	this.slideShowId = slideShowId;
	this.slideShowContainer = document.getElementById(slideShowId)
	this.mediaQueries = window.matchMedia("(min-width: " + this.mediaWidth + "px");
	this.width = window.innerWidth
	//console.log(this.slideShowStyles);
	//console.log(this.width);

	this.initEngine();
}

Engine.prototype.initEngine = function() {
	//event listener for when windo hits media query size
	this.mediaQueries.addListener(this.addMediaQueries.bind(this));
	this.initCSS(this.options.cssData);
	if(this.width >= this.mediaWidth){
		this.initCSS(this.options.mediaQueries);
	}
	this.initHTML();
};
//changes rules if the media width is reached
Engine.prototype.addMediaQueries = function(event) {
	if(event.matches){
		//console.log("add media query");
		this.initCSS(this.options.mediaQueries);
	}
	else{
		//console.log("remove media query");
		this.initCSS(this.options.cssData);
	}
};
//function that will change between components
//here it handles adding the image divs to the slideshow
Engine.prototype.initHTML = function(){
	let slideShowImages = []; 
	//console.log(this.slideShowContainer);
	for(let i = 0;i < this.options.htmlData.images.length;i++){
		let imageDiv = document.createElement("div");  
		imageDiv.classList.add("imageContainer");
		let imageElement = document.createElement("img"); 
		imageElement.src = this.options.htmlData.images[i];
		imageElement.classList.add('slideShowImage');

		if(i === 0){
			imageElement.classList.add('firstImage');
		}
		imageDiv.appendChild(imageElement);
		this.slideShowContainer.appendChild(imageDiv);
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

let engine = new Engine(optionData,900,"slideShowContainer1");