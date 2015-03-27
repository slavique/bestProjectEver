document.addEventListener("DOMContentLoaded", function(event) {
   var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  var response = JSON.parse(xmlhttp.responseText);
	  for(var i = 0; i < response.length; i++){
	  	var newItem = document.createElement('div');
		var itemsImage = document.createElement('img');
		var list = document.querySelector('.goods-list');
		newItem.className = 'goods-item';
		itemsImage.setAttribute("src", response[i].image);
		newItem.innerHTML = '<p>' + response[i].name + '</p><p>' + response[i].description + '</p><img src="' + response[i].image + '"><p>Price: $' + response[i].price + '</p><hr>';
		list.appendChild(newItem);
	  }

    //document.querySelector(".goods-list").innerHTML=xmlhttp.responseText;
//	document.querySelector(".goods-description").innerHTML=response[0].description;
//	document.querySelector(".goods-name").innerHTML=response[0].name;
//	document.querySelector(".goods-price").innerHTML=response[0].price;
//	document.querySelector(".goods-image").setAttribute("src", response[0].image);
//	 
    }
  }
xmlhttp.open("GET","https://api.appery.io/rest/1/code/e45fd6bb-81e7-4e7c-9c78-47bdad6faa59/exec",true);
xmlhttp.send();
  });
