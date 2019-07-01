function NavEngine(options,mediaWidth,componentId){
	Engine.call(this,options,mediaWidth,componentId);

}

NavEngine.prototype.initHTML = function(first_argument) {
	console.log("nav engine class: ", this.componentStyle);
};

NavEngine.prototype = Object.create( Engine.prototype );

let navEngine = new NavEngine(navData,navData.mediaWidth,"nav-desk");