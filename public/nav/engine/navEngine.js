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
	let navOptions = this.options.htmlData.navOptions
	for(let key in navOptions){
		let link = document.createElement("a");
		link.href = navOptions[key];
		link.innerText = key;
		link.target="_blank";

		let deskItem = document.createElement("li");
		deskItem.classList.add("nav-item");
		deskItem.appendChild(link);
		console.log(deskItem,link,this.navMobile.nextSibling);
		this.navDesk.children[2].appendChild(deskItem);
	}

	for(let key in navOptions){
		let link = document.createElement("a");
		link.href = navOptions[key];
		link.innerText = key;
		link.target="_blank";

		let mobileItem = document.createElement("li");
		mobileItem.classList.add("nav-item-mobile");

		mobileItem.appendChild(link);
		
		this.navMobile.nextSibling.nextSibling.firstElementChild.appendChild(mobileItem);
	}
};
//use this to execute order of things
let navEngine = new NavEngine(navData,navData.mediaWidth,"nav-desk","nav-mobile");
navEngine.initHTML();