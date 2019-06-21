function Navbar(desktopNavId,mobileNavId,mobileCloseId,mobileOptionsId){
	this.desktopNav = document.getElementById(desktopNavId);
	this.mobileNav = document.getElementById(mobileNavId);
	this.mobileClose = document.getElementById(mobileCloseId);
	this.mobileOptions = document.getElementById(mobileOptionsId);
	this.mainElement = document.getElementById("main");
	this.currentScrollPosition = 0;
	this.initEventListeners();
	//this.checkWindowSize(window.innerWidth);
}

Navbar.prototype.initEventListeners = function() {
	window.onscroll = function(){
		this.handleScroll();
	}.bind(this);
	this.mobileClose.addEventListener("click",function(e){
		this.closeClicked(e);
	}.bind(this),false);
};

Navbar.prototype.handleScroll = function() {
	console.log(document.body.scrollTop,document.documentElement.scrollTop);
	const currentScroll = document.documentElement.scrollTop;
	if(currentScroll > this.currentScrollPosition){
		console.log("scrolled down");
	}
	else{
		console.log("scrolled up");
	}
	this.currentScrollPosition = document.documentElement.scrollTop;
};

Navbar.prototype.closeClicked = function(event) {
	const navClose = event.currentTarget;
	navClose.classList.toggle("change");
	this.mobileOptions.classList.toggle("hideWidth");
	this.mainElement.classList.toggle("no-scroll");
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
	var navbar = new Navbar("nav-desk","nav-mobile","close-nav","mobile-options");
}

window.onload = initApp;