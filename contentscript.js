var siteNotice = document.getElementById("siteNotice");
if(siteNotice != null){
	var parentOfSiteNotice = siteNotice.parentNode;
	parentOfSiteNotice.removeChild(siteNotice);
}
