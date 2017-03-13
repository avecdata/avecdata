/**
 * 
 */

$(document).ready(function () {
	
	$('li.moment-data__item').mouseover(function() {
		var imgpath = $(this).find('a').attr('data-image');
		$('div.moment-data__graphic').find('figure').find('img').attr('src', imgpath);
	});
});