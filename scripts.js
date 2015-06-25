function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
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

var lightSheet = "{{site.baseurl}}/colorlight.css";
var darkSheet = "{{site.baseurl}}/colordark.css";
var currentSheet = darkSheet;

function swapColorSheet(){
    var nextSheet = lightSheet;
    if (currentSheet == lightSheet) { nextSheet = darkSheet; }
    document.getElementById('colorstyle').setAttribute('href', nextSheet);
    currentSheet = nextSheet;
    setCookie("colorSheet", currentSheet, 30);
}

var currentCookieSheet = getCookie("colorSheet");
if (currentCookieSheet != "") { swapColorSheet(); }