function Navbar(desktopNavId,mobileNavId){
	this.desktopNav = document.getElementById(desktopNavId);
	this.mobileNav = document.getElementById(mobileNavId);

	//this.initEventListeners();
	//this.checkWindowSize(window.innerWidth);
}

Navbar.prototype.initEventListeners = function() {

	window.onresize = function(event) {
		this.checkWindowSize(event.currentTarget.innerWidth);

	}.bind(this);
};

Navbar.prototype.checkWindowSize = function(windowWidth) {
	console.log(this.desktopNav,this.mobileNav);
	if(windowWidth <= 550){
		this.hideNav(this.desktopNav);
		this.displayNav(this.mobileNav);
	}
	else{
		this.hideNav(this.mobileNav);
		this.displayNav(this.desktopNav);
	}
};

function initApp(){
	var navbar = new Navbar("nav-desk","nav-mobile");
}

window.onload = initApp;