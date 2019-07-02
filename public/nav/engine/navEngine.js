function NavEngine(options,mediaWidth,componentId,mobileNavID){
	Engine.call(this,options,mediaWidth,componentId);
	this.navDesk = document.getElementById(componentId);
	this.navMobile = document.getElementById(mobileNavID);
}

NavEngine.prototype = Object.create( Engine.prototype );



NavEngine.prototype.initHTML = function() {
	console.log("nav engine class: ", this.options,this.navDesk.children,
		this.navMobile.children);
	this.navDesk.children[1].innerText = this.options.htmlData.title;
	this.navMobile.children[1].innerText = this.options.htmlData.title;

};
//use this to execute order of things
let navEngine = new NavEngine(navData,navData.mediaWidth,"nav-desk","nav-mobile");
navEngine.initHTML();