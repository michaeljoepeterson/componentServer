function Navbar(desktopNavId,mobileNavId,mobileCloseId,mobileOptionsId){
	this.desktopNav = document.getElementById(desktopNavId);
	this.mobileNav = document.getElementById(mobileNavId);
	this.mobileClose = document.getElementById(mobileCloseId);
	this.mobileOptions = document.getElementById(mobileOptionsId);
	this.mainElement = document.getElementById("main");
	this.scrollTime = 50;
	this.currentScrollPosition = document.documentElement.scrollTop;

	this.scrollAnimation = false;
	this.scrolled = false;
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

	this.desktopNav.addEventListener("mouseover",function(e){
		this.hoverNav()
	}.bind(this),false);
};

Navbar.prototype.hoverNav = function() {
	this.desktopNav.classList.remove("nav-container-small");
	this.desktopNav.children[0].firstChild.style.width = "67px";
}

Navbar.prototype.initHTML = function() {
	console.log("it worked");
}

Navbar.prototype.handleScroll = function() {
	

	const currentScroll = document.documentElement.scrollTop;
	let diff =Math.abs(currentScroll - this.currentScrollPosition);
	//console.log("current scroll, currentScrollPosition ",currentScroll,this.currentScrollPosition);
	//console.log(document.body.scrollTop,document.documentElement.scrollTop,this.scrolled,this.scrollAnimation,diff);
	if(!this.scrolled && diff > 10){
		if(currentScroll > this.currentScrollPosition && !this.scrollAnimation){
			console.log("scrolled down");
			this.scrollAnimation = true;
			setTimeout(function(){		
				console.log("scrolled down timeout",console.dir(this.desktopNav));
				//this.desktopNav.style.height = "45px";
				this.desktopNav.classList.add("nav-container-small");
				this.desktopNav.children[0].firstChild.style.width = "47px";
				this.scrollAnimation = false;
				this.scrolled = true;
			
			}.bind(this),this.scrollTime);
					
		}
		else if(currentScroll < this.currentScrollPosition && !this.scrollAnimation){
			console.log("scrolled up");
			this.scrollAnimation = true;
			setTimeout(function(){		
				console.log("scrolled up timeout");
				this.desktopNav.classList.remove("nav-container-small");
				this.desktopNav.children[0].firstChild.style.width = "67px";
				this.scrollAnimation = false;
				this.scrolled = true;
			}.bind(this),this.scrollTime);	
			
		}
		
	}
	else{
		this.scrolled = false;
	}
	

	this.currentScrollPosition = document.documentElement.scrollTop;
};

Navbar.prototype.closeClicked = function(event) {
	const navClose = event.currentTarget;
	navClose.classList.toggle("change");
	this.mobileOptions.classList.toggle("hideWidth");
	document.body.classList.toggle("no-scroll");
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