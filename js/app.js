(function() {
document.addEventListener("DOMContentLoaded", function(event) {  
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.status == 200) {
	  var response = JSON.parse(xmlhttp.responseText);
	  var filter = document.querySelector('.filter');
	  filter.addEventListener('change', sorting);
	  function sorting(e) {
		  if (e.target.value == 'low to high') {
		  	response.sort(function (a, b){
				return parseInt(a.price) > parseInt(b.price);
			});
		  } else if (e.target.value == 'high to low') {
		  	response.sort(function (a, b){
				return parseInt(a.price) < parseInt(b.price);
			});
		  }
		  render();
	  }
	  function render() {
		var list = document.querySelector('.grid');
		list.innerHTML = "";
	  	for(var i = 0; i < response.length; i++) {
			var newItem = document.createElement('div');
			var itemsImage = document.createElement('img');
			var descriptionPreview = response[i].description;
			  if (descriptionPreview.length > 110) descriptionPreview = (descriptionPreview.substring(0, 110) + "...");
			newItem.className = 'col';
			itemsImage.setAttribute("src", response[i].image);
		    newItem.innerHTML = '<div class="inner-grid"><div class="inner-grid-col"><p><b>' + response[i].name + '</b></p><img width="100px" height="100px" src="' + response[i].image + '"><p>Price: <b>$' + response[i].price + '</b></p></div><div class="inner-grid-col description"><p class="description">' + descriptionPreview + '</p></div></div>';
		    list.appendChild(newItem);
	    }
	  }
	  
	  render();
    }
  }

	xmlhttp.open("GET","https://api.appery.io/rest/1/code/e45fd6bb-81e7-4e7c-9c78-47bdad6faa59/exec",true);
	xmlhttp.send();
	
  });
})();

