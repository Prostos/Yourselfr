function getCookie(name){
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0){
		offset = cookie.indexOf(search);
		if (offset != -1){
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1){
				end = cookie.length;
			}
			setStr = cookie.substring(offset, end);
		}
	}
	return(setStr);
}
function setCookie(data){
	document.cookie = data +";max-age="+ (60*60*24*24*1000) +"; path=/";
}
function clearCookie(name){
	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}
function menuOpen(){
	$("#menu-list").toggle();
	$("#ico_menu").toggleClass("opacity1");
	$(document).mouseup(function (e) {
		var container = $(".menu-list");
		if (container.has(e.target).length === 0){
			$("#menu-list").hide();
		}
	});
}

// For all elements
function areaError(id, time){
	if (!time) var time = 400;
	else var time = parseInt(time);
	$(id).stop().animate({ backgroundColor: "#FAEAEA"}, 400);
	setTimeout("comeback()", time);
	comeback = function(){
	$(id).stop().animate({ backgroundColor: "#FFFFF"}, 600);
	}
}
function areaSuccess(id, time){
	if (!time) 
		var time = 400;
	else 
		var time = parseInt(time);
	$(id).stop().animate({ backgroundColor: "#c0dfb4"}, 400);
	setTimeout("comeback()", time);
	comeback = function(){
	$(id).stop().animate({ backgroundColor: "#FFFFF"}, 600);
	}
}
function catchEvent(evt){
	evt = evt || window.event;
	evt.target || evt.srcElement
	var elem = evt.target || evt.srcElement;
	while(!(elem.id || (elem == document.body))) elem = elem.parentNode;
	if (!elem.id) return; else id = elem.id;
}
function goTop(){
	setTimeout(function(){
		$(window).scroll(function(){
			if ($(window).scrollTop()<="550") 
				$("#top_link").fadeOut("slow")
			else $("#top_link").fadeIn("slow")
		});
		$("#top_link").click(function(){
			$("html,body").animate({scrollTop:0},0)
		});
	}, 3000);
}
function randNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function nowDate(){
	var timedate = new Date();
	var date = timedate.getFullYear() + "," + [timedate.getMonth()+1] + "," + timedate.getDate() + "," + timedate.getHours() + "," + timedate.getMinutes() + "," + timedate.getSeconds() + "," + timedate.getMilliseconds();
	return date;
}
/* Error Reporting
----------------------------------------------------------------------*/
function errorReporting(text, background){
	if (!text) var text = "<b>Something went wrong.</b> Please, clear your <b>cache</b> and <b>reload</b> the page.";
	$("#error_reporting").addClass("error_reporting");
	$("#error_reporting").html(text);
	if (background == '1') 
		areaError("html", 1000);
}
function redirUrl(url){
	var url = url.toString();
}



