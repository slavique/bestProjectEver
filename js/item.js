(function(){
	var $ = document.querySelector.bind(document);
	var itemId = location.hash.slice(4);
	api.getItem(itemId, function(item) {
		$('.render-item').innerHTML = JSON.stringify(item);
	});
//	var xmlhttp = new XMLHttpRequest();
//	xmlhttp.onreadystatechange = function() {
//		if (xmlhttp.status == 200) {
//			console.log(xmlhttp.responseText);
//		}
//	};
//		
//	xmlhttp.open('GET', 'https://api.appery.io/rest/1/db/collections/items/' + itemId);
//    xmlhttp.setRequestHeader('Content-Type', 'application/json');
//	xmlhttp.setRequestHeader('X-Appery-Database-Id', '55131b26e4b0002315f3b76d');
//    xmlhttp.send();	
		
//	console.log(location.hash.slice(4));
}());