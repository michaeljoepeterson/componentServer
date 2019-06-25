function Navbar(desktopNavId,mobileNavId,mobileCloseId,mobileOptionsId){
	this.desktopNav = document.getElementById(desktopNavId);
	this.mobileNav = document.getElementById(mobileNavId);
	this.mobileClose = document.getElementById(mobileCloseId);
	this.mobileOptions = document.getElementById(mobileOptionsId);
	this.mainElement = document.getElementById("main");
	this.scrollTime = 500;
	this.currentScrollPosition = 0;

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
};

Navbar.prototype.handleScroll = function() {
	

	const currentScroll = document.documentElement.scrollTop;
	let diff =Math.abs(currentScroll - this.currentScrollPosition);
	console.log(document.body.scrollTop,document.documentElement.scrollTop,this.scrolled,this.scrollAnimation,diff);
	if(!this.scrolled && diff > 10){
		if(currentScroll > this.currentScrollPosition && !this.scrollAnimation){
			console.log("scrolled down");
			this.scrollAnimation = true;
			setTimeout(function(){		
				console.log("scrolled down timeout");
				this.desktopNav.style.height = "45px";
				this.scrollAnimation = false;
				this.scrolled = true;
			
			}.bind(this),this.scrollTime);
					
		}
		else if(currentScroll < this.currentScrollPosition && !this.scrollAnimation){
			console.log("scrolled up");
			this.scrollAnimation = true;
			setTimeout(function(){		
				console.log("scrolled up timeout");
				this.desktopNav.style.height = "65px";
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