(function() {
document.addEventListener("DOMContentLoaded", function() { 
	var $ = document.querySelector.bind(document);
    $('.filter').addEventListener('change', sorting);
	var response = [];
	// call render function after itemsList call succeed
	api.getItemsList(render);

	 
	function sorting(e) {
		 
	//	 var objFromLocalStorage = localStorage.getItem(i);
		 for(var i = 0; i < localStorage.length -1; i++){
			 function loop(){
				 var tempObj = JSON.parse(localStorage.getItem(i));
				 //var rr = JSON.parse(tempObj);
				 response.push(tempObj);
			 	 
			 };
			 loop();
		 	
		 }
		 console.log(response);
		    if (e.target.value == 'low to high') {
		  	  response.sort(function (a, b){
				  return a.price < b.price;
			  });
		    } else if (e.target.value == 'high to low') {
		  	response.sort(function (a, b){
				return a.price > b.price;
			  });
		    }
		    render(response);
	    }
	
    function render(items) {
		var list = document.querySelector('.grid');
		list.innerHTML = "";
		for(var i = 0; i < items.length; i++) {
			var newItem = document.createElement('div');
			var itemsImage = document.createElement('img');
			var descriptionPreview = items[i].description;
			if (descriptionPreview.length > 110) descriptionPreview = (descriptionPreview.substring(0, 110) + "...");
			newItem.className = 'col';
			itemsImage.setAttribute("src", items[i].image);
			newItem.innerHTML = '<a class="inner-grid" href="item.html#id=' + items[i]._id + '"><div class="inner-grid-col"><p><b>' + items[i].name + '</b></p><img width="100px" height="100px" src="' + items[i].image + '"><p>Price: <b>$' + items[i].price + '</b></p></div><div class="inner-grid-col description"><p class="description">' + descriptionPreview + '</p></div></a>';
			list.appendChild(newItem);
			localStorage.setItem(i,  '{"price": ' + items[i].price +', "id": ' + items[i]._id + ', "description": ' + items[i].description +', "name": ' + items[i].name +'}');

			

        }
    }
//var xmlhttp = new XMLHttpRequest();
//xmlhttp.onreadystatechange = function() {
//	var response = JSON.parse(xmlhttp.responseText);
//	var filter = document.querySelector('.filter');
//	filter.addEventListener('change', sorting);
//	if (xmlhttp.status == 200) {
//	    
//	    function sorting(e) {
//		    if (e.target.value == 'low to high') {
//		  	  response.sort(function (a, b){
//				  return parseInt(a.price) > parseInt(b.price);
//			  });
//		    } else if (e.target.value == 'high to low') {
//		  	response.sort(function (a, b){
//				return parseInt(a.price) < parseInt(b.price);
//			  });
//		    }
//		    render();
//	    }
//	    function render() {
//			var list = document.querySelector('.grid');
//			list.innerHTML = "";
//			for(var i = 0; i < response.length; i++) {
//				var newItem = document.createElement('div');
//				var itemsImage = document.createElement('img');
//				var descriptionPreview = response[i].description;
//				  if (descriptionPreview.length > 110) descriptionPreview = (descriptionPreview.substring(0, 110) + "...");
//				newItem.className = 'col';
//				itemsImage.setAttribute("src", response[i].image);
//				newItem.innerHTML = '<a class="inner-grid" href="item.html#id=' + response[i]._id + '"><div class="inner-grid-col"><p><b>' + response[i].name + '</b></p><img width="100px" height="100px" src="' + response[i].image + '"><p>Price: <b>$' + response[i].price + '</b></p></div><div class="inner-grid-col description"><p class="description">' + descriptionPreview + '</p></div></a>';
//				list.appendChild(newItem);
//
//				
//	       }
//	    }
//	  
//	    render();
//
//    }
//  }
//
//	xmlhttp.open("GET","https://api.appery.io/rest/1/code/e45fd6bb-81e7-4e7c-9c78-47bdad6faa59/exec",true);
//	xmlhttp.send();
	
  });
})();

