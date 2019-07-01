function NavEngine(options,mediaWidth,componentId){
	Engine.call(this,options,mediaWidth,componentId);
}

NavEngine.prototype = Object.create( Engine.prototype );

NavEngine.prototype.initHTML = function() {
	console.log("nav engine class: ", this.componentStyle);
};
//use this to execute order of things
let navEngine = new NavEngine(navData,navData.mediaWidth,"nav-desk");
navEngine.initHTML();