function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; domain=.zoggop.com; path=/pg-test";
} 

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

var currentSheet = darkSheet;

function swapColorSheet(){
    var nextSheet = lightSheet;
    if (currentSheet == lightSheet) { nextSheet = darkSheet; }
    document.getElementById('colorstyle').setAttribute('href', nextSheet);
    currentSheet = nextSheet;
    setCookie("colorSheet", currentSheet, 30);
}

var currentCookieSheet = getCookie("colorSheet");
if (currentCookieSheet != "") {
	if (currentCookieSheet == lightSheet) {
		swapColorSheet();
	}
}
     
// Replace labnol with your disqus shortname
var disqus_shortname = "thebluescreenofdeath";
 
var disqus_loaded = false;
 
// This is the function that will load Disqus comments on demand
function disqus() {
 
  if (!disqus_loaded)  {
    
    // This is to ensure that Disqus widget is loaded only once
    disqus_loaded = true;
    
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "//" + disqus_shortname + ".disqus.com/embed.js";
    (document.getElementsByTagName("head")[0] ||
     document.getElementsByTagName("body")[0])
    .appendChild(e);
  }
} 