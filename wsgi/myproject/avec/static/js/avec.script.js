/**
 * 
 */

$(document).ready(function () {
	
	//window.url_config = 'http://192.168.0.104:8080';
	window.url_config = 'http://www.avecdata.com'
	
	$('li.moment-data__item').mouseover(function() {
		var imgpath = $(this).find('a').attr('data-image');
		$('div.moment-data__graphic').find('figure').find('img').attr('src', imgpath);
	});
	
	var csrftoken = getCookie('csrftoken');
	
	$.ajaxSetup({
	    beforeSend: function(xhr, settings) {
	        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
	            xhr.setRequestHeader("X-CSRFToken", csrftoken);
	        }
	    }
	});
	
	$('#autocomplete').autocomplete({
		type:'post',
		dataType: 'json',
		params: {"param1": $(this).val() },
		minChars: 2,
		serviceUrl: window.url_config+'/themes_list/',
	    onSelect: function (ui) {
			if (ui.type=='subject' ){
				window.location.href = '/subject/'+ui.id;
			}		
			if (ui.type=='post' ){
				window.location.href = '/post/'+ui.id;
			}
	    }
	});
});

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}