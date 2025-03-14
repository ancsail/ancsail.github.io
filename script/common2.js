/// Copyright (c) 2004-2006, Tatter & Company / Tatter & Friends.
/// All rights reserved. Licensed under the GPL.
/// See the GNU General Public License for more details. (/doc/LICENSE, /doc/COPYRIGHT)
//<![CDATA[
var sUserAgent = navigator.userAgent;
var fAppVersion = parseFloat(navigator.appVersion);

function compareVersions(sVersion1, sVersion2) {

    var aVersion1 = sVersion1.split(".");
    var aVersion2 = sVersion2.split(".");
    
    if (aVersion1.length > aVersion2.length) {
        for (var i=0; i < aVersion1.length - aVersion2.length; i++) {
            aVersion2.push("0");
        }
    } else if (aVersion1.length < aVersion2.length) {
        for (var i=0; i < aVersion2.length - aVersion1.length; i++) {
            aVersion1.push("0");
        }    
    }
    for (var i=0; i < aVersion1.length; i++) {
 
        if (aVersion1[i] < aVersion2[i]) {
            return -1;
        } else if (aVersion1[i] > aVersion2[i]) {
            return 1;
        }    
    }
    return 0;

}

var isOpera = sUserAgent.indexOf("Opera") > -1;
var isMinOpera4 = isMinOpera5 = isMinOpera6 = isMinOpera7 = isMinOpera7_5 = false;

if (isOpera) {
    var fOperaVersion;
    if(navigator.appName == "Opera") {
        fOperaVersion = fAppVersion;
    } else {
        var reOperaVersion = new RegExp("Opera (\\d+\\.\\d+)");
        reOperaVersion.test(sUserAgent);
        fOperaVersion = parseFloat(RegExp["$1"]);
    }

    isMinOpera4 = fOperaVersion >= 4;
    isMinOpera5 = fOperaVersion >= 5;
    isMinOpera6 = fOperaVersion >= 6;
    isMinOpera7 = fOperaVersion >= 7;
    isMinOpera7_5 = fOperaVersion >= 7.5;
}

var isKHTML = sUserAgent.indexOf("KHTML") > -1 
              || sUserAgent.indexOf("Konqueror") > -1 
              || sUserAgent.indexOf("AppleWebKit") > -1; 
              
var isMinSafari1 = isMinSafari1_2 = false;
var isMinKonq2_2 = isMinKonq3 = isMinKonq3_1 = isMinKonq3_2 = false;
var isSafari = false;
if (isKHTML) {
    isSafari = sUserAgent.indexOf("AppleWebKit") > -1;
    isKonq = sUserAgent.indexOf("Konqueror") > -1;

    if (isSafari) {
        var reAppleWebKit = new RegExp("AppleWebKit\\/(\\d+(?:\\.\\d*)?)");
        reAppleWebKit.test(sUserAgent);
        var fAppleWebKitVersion = parseFloat(RegExp["$1"]);

        isMinSafari1 = fAppleWebKitVersion >= 85;
        isMinSafari1_2 = fAppleWebKitVersion >= 124;
    } else if (isKonq) {

        var reKonq = new RegExp("Konqueror\\/(\\d+(?:\\.\\d+(?:\\.\\d)?)?)");
        reKonq.test(sUserAgent);
        isMinKonq2_2 = compareVersions(RegExp["$1"], "2.2") >= 0;
        isMinKonq3 = compareVersions(RegExp["$1"], "3.0") >= 0;
        isMinKonq3_1 = compareVersions(RegExp["$1"], "3.1") >= 0;
        isMinKonq3_2 = compareVersions(RegExp["$1"], "3.2") >= 0;
    } 
    
}

var isIE = sUserAgent.indexOf("compatible") > -1 
           && sUserAgent.indexOf("MSIE") > -1
           && !isOpera;
 
var isMinIE4 = isMinIE5 = isMinIE5_5 = isMinIE6 = false;

if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(sUserAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);

    isMinIE4 = fIEVersion >= 4;
    isMinIE5 = fIEVersion >= 5;
    isMinIE5_5 = fIEVersion >= 5.5;
    isMinIE6 = fIEVersion >= 6.0;
}

var isMoz = sUserAgent.indexOf("Gecko") > -1
            && !isKHTML;

var isMinMoz1 = sMinMoz1_4 = isMinMoz1_5 = false;

if (isMoz) {
    var reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)");
    reMoz.test(sUserAgent);
    isMinMoz1 = compareVersions(RegExp["$1"], "1.0") >= 0;
    isMinMoz1_4 = compareVersions(RegExp["$1"], "1.4") >= 0;
    isMinMoz1_5 = compareVersions(RegExp["$1"], "1.5") >= 0;
}

var isNS4 = !isIE && !isOpera && !isMoz && !isKHTML 
            && (sUserAgent.indexOf("Mozilla") == 0) 
            && (navigator.appName == "Netscape") 
            && (fAppVersion >= 4.0 && fAppVersion < 5.0);

var isMinNS4 = isMinNS4_5 = isMinNS4_7 = isMinNS4_8 = false;

if (isNS4) {
    isMinNS4 = true;
    isMinNS4_5 = fAppVersion >= 4.5;
    isMinNS4_7 = fAppVersion >= 4.7;
    isMinNS4_8 = fAppVersion >= 4.8;
}

var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") 
            || (navigator.platform == "Macintosh");

var isUnix = (navigator.platform == "X11") && !isWin && !isMac;

var isWin95 = isWin98 = isWinNT4 = isWin2K = isWinME = isWinXP = false;
var isMac68K = isMacPPC = false;
var isSunOS = isMinSunOS4 = isMinSunOS5 = isMinSunOS5_5 = false;

if (isWin) {
    isWin95 = sUserAgent.indexOf("Win95") > -1 
              || sUserAgent.indexOf("Windows 95") > -1;
    isWin98 = sUserAgent.indexOf("Win98") > -1 
              || sUserAgent.indexOf("Windows 98") > -1;
    isWinME = sUserAgent.indexOf("Win 9x 4.90") > -1 
              || sUserAgent.indexOf("Windows ME") > -1;
    isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 
              || sUserAgent.indexOf("Windows 2000") > -1;
    isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 
              || sUserAgent.indexOf("Windows XP") > -1;
    isWinNT4 = sUserAgent.indexOf("WinNT") > -1 
              || sUserAgent.indexOf("Windows NT") > -1 
              || sUserAgent.indexOf("WinNT4.0") > -1 
              || sUserAgent.indexOf("Windows NT 4.0") > -1 
              && (!isWinME && !isWin2K && !isWinXP);
} 

if (isMac) {
    isMac68K = sUserAgent.indexOf("Mac_68000") > -1 
               || sUserAgent.indexOf("68K") > -1;
    isMacPPC = sUserAgent.indexOf("Mac_PowerPC") > -1 
               || sUserAgent.indexOf("PPC") > -1;  
}

if (isUnix) {
    isSunOS = sUserAgent.indexOf("SunOS") > -1;

    if (isSunOS) {
        var reSunOS = new RegExp("SunOS (\\d+\\.\\d+(?:\\.\\d+)?)");
        reSunOS.test(sUserAgent);
        isMinSunOS4 = compareVersions(RegExp["$1"], "4.0") >= 0;
        isMinSunOS5 = compareVersions(RegExp["$1"], "5.0") >= 0;
        isMinSunOS5_5 = compareVersions(RegExp["$1"], "5.5") >= 0;
    }
}

function analysis(msg,mode) {
	try {
		if(mode == undefined) {
			var temp ='';
			for(var name in msg) {
				temp +=name+'\t\t:'+msg[name]+'\n';
			}
			return temp
		} else if(mode ='w') {
			var temp ='<table  cellspacing="0">';
			for(var name in msg) {
				temp +='<tr>';
				temp +='<td>'+name+'</td><td>'
				temp += msg[name]
				temp +='</td>';
				temp +='</tr>';
			}
			temp +='</table>';
			return temp;
		}
	} catch (e) {
		//alert(e);
	}
}

function trace(msg,mode) {
	result = analysis(msg,mode);
	if(mode == undefined) {
		alert(result);
	} else if(mode ='w') {
		var traceWin = window.open('', "traceWin");
		traceWin.document.write(result);
	}
	
}

function openLinkInNewWindow(callee) {
	if (callee) {
		var url = callee.getAttribute("href");
		if (url) {
			window.open(url);
			return false;
		}
	}
	return true;
}


function toggleLayer(id) {
	try {
	var obj = document.getElementById(id);
	obj.style.display = (obj.style.display == "none") ? "block" : "none";
	} catch (e) {
		
	}
	return true;
}
function showLayer(id) {
	document.getElementById(id).style.display = "block";
	return true;
}
function hideLayer(id) {
	document.getElementById(id).style.display = "none";
	return true;
}

function findFormObject(caller) {
	for (var obj = caller; obj; obj = obj.parentNode) {
		
		if (obj.nodeName == "FORM")
			return obj;
	}

	return null;
}

function trim(str) {
	var start = 0;
	var end = str.length;
	for (var i = 0; i < str.length; i ++) {
		if (str.charAt(i) != " ") {
			start = i;
			break;
		}
	}
	for (var i = str.length - 1; i >= 0; i --) {
		if (str.charAt(i) != " ") {
			end = i + 1;
			break;
		}
	}
	return str.substring(start, end);
}

function checkValue(oField, message) {
	try {
		if (oField.value.length == 0) {
			alert(message);
			oField.focus();
			return false;
		}
		return true;
	} catch(e) {
		
		return false;
	}
}

function trimAll(oForm) {
	try {
		for (var i = 0; i < oForm.elements.length; i ++) {
			var tagName = oForm.elements[i].tagName.toLowerCase();
			var type = oForm.elements[i].type;
			/*
			if((tagName == "input" && type == "text") || tagName == "textarea")
				oForm.elements[i].value = trim(oForm.elements[i].value);
			*/
		}
		return true;
	} catch (e) {
		alert(e.message);
	}
}

function openKeyword(url) {
	window.open(url, 'keyword', 'width=570,height=650,location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0');
}

var oProgress = null;
function beginProgress() {
	endProgress();
	oProgress = document.createElement("span");
	oProgress.style.position = "absolute";
	oProgress.style.left = "0px";
	oProgress.style.top = "0px";
	oProgress.style.backgroundColor = "#FFFF99";
	oProgress.innerText = "???..";
	document.body.appendChild(oProgress);
}
function endProgress() {
	if (oProgress) {
		document.body.removeChild(oProgress);
		oProgress = null;
	}
}



if(isMoz) {
	XMLDocument.prototype.selectNodes= function(path) {
		var oEvaluator = new XPathEvaluator();
		var oResult = oEvaluator.evaluate(path, this, null, XPathResult.ORDERER_NODE_ITERATOR_TYPE, null);
		var result = new Array();
		var oElement = oResult.iterateNext();
		while(oElement) {
			result[oElement.nodeName]=oElement.firstChild.nodeValue;
			oElement = oResult.iterateNext();
		}
		return result;
	}
	XMLDocument.prototype.selectSingleNode = function(path) {
		var oEvaluator = new XPathEvaluator();
		var oResult = oEvaluator.evaluate(path, this, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
		return oResult.singleNodeValue;	
	}
	Node.prototype.__defineGetter__("xml",function() {
		var os = new XMLSerializer();
		return os.serializeToString(this,"text/xml");
	});
} 

function createHttp() {
	try {
		return new XMLHttpRequest();
	}
	catch (e) {
		var objectNames = ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
		for (var i = 0; i < objectNames.length; i ++) {
			try {
				return new ActiveXObject(objectNames[i]);
				break;
			}
			catch (e) {
			}
		}
		return null;
	}
}

/*
loadingIntervaler = function(loading) {
	try {
		if(loading) {
			document.body.style.cursor = "wait";
		} else {
			document.body.style.cursor = "default";
		}
		window.status = loading;
	} catch(e) {
		
	}
}

window.onload = function() {
	try {
		//setInterval("loadingIntervaler(loading)", 1);
	} catch(e) {
		alert(e.message);
	}
}
*/
var loading = false;

function getResponse(uri,content) {
	try {
		loading = true
		var body = document.body;
		var oHttp = createHttp();
		if(uri.indexOf('?') ==-1) aux = '?';
		else aux = '&';
		oHttp.open("POST", uri + aux+"time=" + (new Date()).getTime(), false);
		if(content == undefined) {
			content = '';	
		} else {
			oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");	
		}
		oHttp.send(content);
		result = new Array();
		if(isSafari || isOpera) {
				resultNodes = oHttp.responseXML.firstChild.childNodes;
				for(var i=0; i<resultNodes.length; i++) {
					if(resultNodes.item(i).firstChild != null)
						result[resultNodes.item(i).nodeName]=resultNodes.item(i).firstChild.nodeValue;
				}
			loading = false
			delete oHttp;
			return result;
		} else if(isIE) {
			resultNodes = oHttp.responseXML.documentElement.childNodes;
			result = new Array();
			for(var i=0; i<resultNodes.length; i++) {
				result[resultNodes[i].nodeName] = resultNodes[i].text;
			}
			loading = false
			delete oHttp;
			return result;		
		} else {
			loading = false
			var returnValue = oHttp.responseXML.selectNodes("/response/descendant::*");
			delete oHttp;
			return returnValue;
		} 
		delete oHttp;
	} catch(e) {
		alert("exception");
		loading = false
		var escapeSpace = document.getElementsByName('body');
		var iframeElement = document.createElement('div');
		document.body.appendChild(iframeElement);
		iframeElement.innerHTML = '<iframe src="'+uri+'"style="display:none" onload="location.href=location.href"><\/iframe>';	
		
		return false;
	}
}

function requestHttp(uri) {
	try{		
		var oHttp = createHttp();
		oHttp.open("GET", uri + "&time=" + (new Date()).getTime(), false);
		oHttp.send("");
		if(isSafari || isOpera) {
			var returnValue = oHttp.responseXML.firstChild.firstChild.nextSibling.firstChild.nodeValue;
			delete oHttp;
			return returnValue;
		} else {
			var returnValue = oHttp.responseXML.selectSingleNode("/response/error").text;
			delete oHttp;
			return returnValue;
		}
	} catch (e) {
		window.status = e.messge;
	}
}

function requestHttpText(uri) {
	var oHttp = createHttp();
	oHttp.open("GET", uri + "&time=" + (new Date()).getTime(), false);
	oHttp.send("");
	var returnValue = oHttp.responseText;
	delete oHttp;
	return returnValue;
}

function requestHttpXml(uri) {
	var oHttp = createHttp();
	oHttp.open("GET", uri + "&time=" + (new Date()).getTime(), false);
	oHttp.send("");
	var returnValue = oHttp.responseXML;
	delete oHttp;
	return returnValue;
}

function requestPost(uri, content) {
	var oHttp = createHttp();
	oHttp.open("POST", uri + "&time=" + (new Date()).getTime(), false);
	oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	oHttp.send(content+ "&time=" + (new Date()).getTime());
	var returnValue = oHttp.responseXML.selectSingleNode("/response/error").text;
	delete oHttp;
	return returnValue;
}

function requestPostText(uri, content) {
	var oHttp = createHttp();
	oHttp.open("POST", uri + "&time=" + (new Date()).getTime(), false);
	oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	oHttp.send(content);
	var returnValue = oHttp.responseText;
	delete oHttp;
	return returnValue;
}

function setRequestBody(elementName, elementValue, boundary)
{
	var body = "";
	body += "--" + boundary + "\r\n";
	body += "Content-Disposition: form-data; name=\"" + elementName + "\"" + "\r\n\r\n";
	body += elementValue + "\r\n"; 
	return body;
}

function isNull(field,message) {
	if (field.value.length==0) {
		alert(message + '\t');
		field.focus();
		return true;
	}
	return false;
}

function open_img(img_src) {
	img_view = window.open("", "TatterImagePopup", "width=0, height=0, left=0, top=0, scrollbars=yes, resizable=yes");
	img_view.document.write(
		'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n' + 
		'<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">\n' + 
		'	<head>\n' + 
		'		<title> :: View :: <\/title>\n' + 
		'		<meta http-equiv="content-type" content="text/html; charset=utf-8" />\n' + 
		'		<script type="text/javascript">\n' + 
		'			function getWindowCleintHeight() {\n' + 
		'				return (window.innerHeight != null) ? window.innerHeight : document.documentElement.clientHeight;\n' + 
		'			}\n' + 
		'			function getWindowCleintWidth() {\n' + 
		'				return (window.innerWidth != null) ? window.innerWidth : document.documentElement.clientWidth;\n' + 
		'			}\n' + 
		'			function resize(img) {\n' + 
		'				var imageWidth = img.width+5;\n' + 
		'				var imageHeight = img.height+5;\n' +
		'				var screenWidth = screen.availWidth;\n' + 
		'				var screenHeight = screen.availHeight;\n' + 
		'				var windowWidth = imageWidth;\n' + 
		'				var windowHeight = imageHeight;\n' + 
		'				var positionX = (screenWidth - imageWidth) / 2;\n' + 
		'				var positionY = (screenHeight - imageHeight) / 2;\n' + 
		'				if(imageWidth > screenWidth * 0.8) {\n' + 
		'					windowWidth = screenWidth * 0.8;\n' + 
		'					document.body.scroll ="yes";\n' + 
		'					positionX = 0;\n' +
		'				}\n' + 
		'				if(imageHeight > screenHeight * 0.8 ) {\n' + 
		'					windowHeight = screenHeight * 0.8;\n' + 
		'					document.body.scroll ="yes";\n' + 
		'					positionY = 0;\n' +
		'				}\n' + 
        '               iWidth = windowWidth - getWindowCleintWidth();\n' + 
        '               iHeight = windowHeight - getWindowCleintHeight();\n' + 
        '               window.resizeBy(iWidth, iHeight);\n' + 
		'				window.moveTo(positionX, positionY);\n' + 
		'			}\n' + 
		'		<\/script>\n' + 
		'	<\/head>\n' + 
		'	<body style="margin: 0px; padding: 0;">\n' + 
		'		<a href="javascript:window.close()"><img src="' + img_src + '" style="border: 0px; padding: 0; margin:0;" onload="resize(this)" /><\/a>\n' + 
		'	<\/body>\n' + 
		'<\/html>');

	try { 
    	img_view.document.close(); // 팝업창의 문서를 닫는다.
	}
	catch(e) { }
	try { 
	    img_view.document.focus();// 팝업창 문서에 포커스
	}
	catch(e) { }
}

function openFullScreen(content,caption,root) {
	try {
	/*
	var code ='\
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\
	<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko">\
	<head>\
	<title>'+caption+' - iMazing</title>\
	<script type="text/javascript" src="'+root+'/script/common2.js"></script>\
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
	<style>\
		body {\
			margin:0px;	\
			width: 100%; \
			height: 100% \
		}\
	</style>\
	</head>\
	<body>\
		<script type="text/javascript">document.write(\''+content+'\')</script>\
	</body>\
	</html>';
	*/
	} catch(e) {
	}
		img_view = window.open(content,'img_popup','width='+screen.width+',height='+screen.height+',left=0,top=0,scrollbars=no,resizable=yes');
		img_view.status = caption;
	try { img_view.document.focus(); }// 팝업창 문서에 포커스
	catch(e) { }
}

function scroller(target, acceleration) {	
	try {
		var target = document.getElementById(target);
		var dest = document.body.scrollTop;		
		status = target.scrollTop+'  '+document.body.scrollTop+'  '+acceleration+' = '+((target.offsetTop - document.body.scrollTop)/acceleration)
		dest += (target.offsetTop - document.body.scrollTop)/acceleration
		if ( document.body.scrollTop == dest) 
			clearInterval(scrollerId);
		window.scroll(0, dest);
	} catch(e) {
		clearInterval(scrollerId);
		alert(e.message);	
	}
}

function eleganceScroll(target, acceleration) {
	if(acceleration == undefined) 
		acceleration = 8;
	scrollerId = window.setInterval("scroller('"+target+"',"+acceleration+")",1000/30);
}

function showJukeboxList(id,height){
	target = document.getElementById('jukeBoxContainer'+id);
	divTarget = document.getElementById('jukeBox'+id+'Div');
	flashTarget = document.getElementById('jukeBox'+id+'Flash');
	target.style.height = flashTarget.style.height = divTarget.style.height = height+'px';
}

function setUserSetting(name, value) {
	var request = new HTTPRequest("POST", blogURL + "/owner/setting/userSetting/set/");
	request.send("name=" + encodeURIComponent(name) + "&value=" + encodeURIComponent(value));
}

function getWindowCleintHeight() {
	return (window.innerHeight != null) ? window.innerHeight : document.documentElement.clientHeight;
}

function getWindowCleintWidth() {
	return (window.innerWidth != null) ? window.innerWidth : document.documentElement.clientWidth;
}

function getOffsetTop(obj)
{ return obj ? obj.offsetTop + getOffsetTop(obj.offsetParent) : 0; }

function getOffsetLeft(obj)
{ return obj ? obj.offsetLeft + getOffsetLeft(obj.offsetParent) : 0; }

function updateFeed()
{
	var http = createHttp();
	if(http) {
		http.open("GET", blogURL + "/feeder?" + (new Date()).getTime(), true);
		http.send("");
	}
}

// obj 객체의 자식을 모두 탐색해 tagName을 가진 노드를 배열로 리턴
function searchChildNodes(obj, tagName) {
	var nodes = new Array();
	if(obj.hasChildNodes()) {
		for(var i=0; i<obj.childNodes.length; i++) {
			var node = obj.childNodes[i];
			if(node.nodeType != 1)
				continue;
			if(node.tagName.toUpperCase() == tagName.toUpperCase())
				nodes[nodes.length] = node;
			var childNodes = searchChildNodes(node, tagName);
			for(var j=0; j<childNodes.length; j++) {
				nodes[nodes.length] = childNodes[j];
			}
		}
	}
	return nodes;
}

function getEmbedCode(movie,width,height,id,bg,FlashVars,menu, transparent, quality, bgcolor, allowScriptAccess, version){
	try {
		if(movie == undefined || width == undefined || height == undefined)
			return false;
		
		if ( FlashVars == undefined) {
			var _FlashVars_object = '';
			var _FlashVars_embed = '';
		} else {
			var _FlashVars_object = '<param name="FlashVars" value="'+FlashVars+'" />';
			var _FlashVars_embed = ' FlashVars="'+FlashVars+'" ';
		}
		
		if ( menu == undefined) {
			var _menu_object = '';
			var _menu_embed = '';
		} else {
			var _menu_object = '<param name="menu" value="'+menu+'" />';
			var _menu_embed = ' menu="'+menu+'" ';
		}
		
		if ( transparent == undefined) {
			var _transparent_object = '';
			var _transparent_embed = '';
		} else {
			var _transparent_object = '<param name="wmode" value="'+transparent+'" />';
			var _transparent_embed = ' wmode="'+transparent+'" ';
		}
		
		if ( quality == undefined) {
			var _quality_object = '';
			var _quality_embed = '';
		} else {
			var _quality_object = '<param name="quality" value="'+quality+'" />';
			var _quality_embed = ' quality="'+quality+'" ';
		}
		
		if ( bgcolor == undefined) {
			var _bgcolor_object = '';
			var _bgcolor_embed = '';
		} else {
			var _bgcolor_object = '<param name="bgcolor" value="'+bgcolor+'" />';
			var _bgcolor_embed = ' bgcolor="'+bgcolor+'" ';
		}
		
		if ( allowScriptAccess == undefined) {
			var _allowScriptAccess_object = '';
			var _allowScriptAccess_embed = '';
		} else {
			var _allowScriptAccess_object = '<param name="allowScriptAccess" value="'+allowScriptAccess+'" />';
			var _allowScriptAccess_embed = ' allowScriptAccess="'+allowScriptAccess+'" ';
		}
	
		if  (version == undefined) {
			version = '7,0,0,0';
		}
	
		var flashStr=
		'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+version+'" width="'+width+'" height="'+height+'" id="'+id+'" align="middle"><param name="movie" value="'+movie+'" />'+_allowScriptAccess_object+_FlashVars_object+_menu_object+_quality_object+_bgcolor_object+_transparent_object;
		flashStr += '<embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+movie+'"'+' width="'+width+'"'+' height="'+height+'"'+_allowScriptAccess_embed+_FlashVars_embed+_menu_embed+_quality_embed+_bgcolor_embed+_transparent_embed+' />'+
		'</object>';
		
		return flashStr;
	} catch(e) {
		return false;
	}
	
} 

function writeCode(str, id) {
        str = str.replace('src="', 'src="http://' + document.domain);
	if(id == undefined) document.write(str);
	else document.getElementById(id).innerHTML = str;
}

function writeCode2(str, id) {
	if(id == undefined) document.write(str);
	else document.getElementById(id).innerHTML = str;
}
    
var StringBuffer = function()
{ this.buffer = new Array(); }

StringBuffer.prototype.append=function(str)
{ this.buffer[this.buffer.length] = str; }

StringBuffer.prototype.toString = function()
{ return this.buffer.join(""); }

if(!Array.prototype.push) {
	Array.prototype.push = function() {
		var startLength = this.length;
		for(var i=0; i<arguments.length; i++)
			this[startLength + i] = arguments[i];

		return this.length;
	}
}

if(!String.prototype.trim) {
	String.prototype.trim = function()
	{ return this.replace(new RegExp("(^\\s*)|(\\s*$)", "g"), ""); }
}

if(!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(source, target) {
        source = source.replace(new RegExp("(\\W)", "g"), "\\$1");
        target = target.replace(new RegExp("\\$", "g"), "$$$$");
        return this.replace(new RegExp(source, "gm"), target);
    }
}

if(!String.prototype.count) {
	String.prototype.count = function (str) {
		var matches = this.match(new RegExp(str.replace(new RegExp("(\\W)", "g"), "\\$1"), "g"));
		return matches ? matches.length : 0;
	}
}

function getTagChunks(str, tagName) {
	var chunks = new Array();
	var pos1 = pos2 = 0;
	lowerStr = str.toLowerCase();
	lowerTagName = tagName.toLowerCase();
	while((pos1 = lowerStr.indexOf("<" + lowerTagName, pos2)) > -1) {
		do {
			if((pos2 = lowerStr.indexOf("</" + lowerTagName + ">", pos2)) == -1)
				return chunks;
			var temp = str.substring(pos1, pos2 + lowerTagName.length + 3);
			pos2 += lowerTagName.length + 3;
		} while(temp.count("<" + lowerTagName) != temp.count("</" + lowerTagName + ">"));
		chunks[chunks.length] = temp;
	}
	return chunks;
}

function toggleMoreLess(obj, num, txtMore, txtLess)
{
	oMore = document.getElementById('more' + num);
	oContent = document.getElementById('content' + num);
	
	if (txtMore.Length == 0) txtMore = 'more...';
	if (txtLess.Length == 0) txtLess = 'less...';
	
	if (oContent.style.display == 'none') {
		oContent.style.display = 'block';
		oMore.className = "moreless_top";
		obj.innerHTML = txtLess;
		
		oLess = document.createElement("P");
		oLess.id = "less" + num;
		oLess.className = "moreless_bottom";
		var txtMore2 = txtMore.replace(/&/g,'&amp;');
		var txtLess2 = txtLess.replace(/&/g,'&amp;');
		
		oLess.innerHTML = '<span style="cursor: pointer;" onclick="toggleMoreLess(this, \'' + num + '\', \'' + txtMore2 + '\', \'' + txtLess2 + '\'); return false;">' + txtLess + '<\/span>';
		
		after = oContent.nextSibling;
		oContent.parentNode.insertBefore(oLess, after);
	} else {
		oContent.style.display = 'none';
		oMore.className = "moreless_fold";
		oMore.childNodes[0].innerHTML = txtMore;
		
		oLess = document.getElementById('less' + num);
		oContent.parentNode.removeChild(oLess);
	}
}

function getParentByTagName(tag, obj)
{
	while (obj.tagName != tag.toUpperCase()) {
		obj = obj.parentNode;
	}
	return obj;
}

function removeItselfById(id) {
	document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

function makeQueryStringByForm(formId) {
	queryString = "";
	tempForm = document.getElementById(formId);
	
	for (i=0; i<tempForm.elements.length; i++) {
		if (queryString != "")
			linker = "&";
		else
			linker = "";
		
		// disabled 상태이면 패스.
		if (tempForm.elements[i].disabled == true)
			continue;
		
		if (tempForm.elements[i].tagName.toLowerCase() == "input") {
			switch (tempForm.elements[i].type) {
				case "checkbox":
				case "radio":
					if (tempForm.elements[i].checked == true)
						queryString += linker + tempForm.elements[i].name + "=" + tempForm.elements[i].value;
					break;
				case "text":
				case "password":
					queryString += linker + tempForm.elements[i].name + "=" + tempForm.elements[i].value;
					break;
				case "file":
					if (tempForm.elements[i].value != "")
						queryString += linker + tempForm.elements[i].name + "=" + tempForm.elements[i].value;
			}
		} else if (tempForm.elements[i].tagName.toLowerCase() == "select") {
			num = tempForm.elements[i].selectedIndex;
			queryString += linker + tempForm.elements[i].name + "=" + tempForm.elements[i].options[num].value;
		} else if (tempForm.elements[i].tagName.toLowerCase() == "textarea") {
			queryString += linker + tempForm.elements[i].name + "=" + tempForm.elements[i].value;
		}
	}
	
	return queryString;
}

function showMessage(str) {
	PM.showMessage("" + str, "right", "bottom");
}

function preventEnter(event) {
    if (!event) event = window.event;
    if (event.keyCode == 13) {
        event.returnValue = false; 
        event.cancelBubble = true;
        try { 
            event.preventDefault(); 
        } catch(e) { }
        return false;
    }
    return true;
}