document.addEventListener("DOMContentLoaded", function(event) {
   var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  var response = JSON.parse(xmlhttp.responseText);
	  console.log(response);
//	  document.querySelector(".goods-list").innerHTML=response.description;
    document.querySelector(".goods-list").innerHTML=xmlhttp.responseText;
	document.querySelector(".goods-description").innerHTML=response[0].description;
	document.querySelector(".goods-name").innerHTML=response[0].name;
	document.querySelector(".goods-price").innerHTML=response[0].price;
	document.querySelector(".goods-image").setAttribute("src", response[0].image);
	 
    }
  }
xmlhttp.open("GET","https://api.appery.io/rest/1/code/e45fd6bb-81e7-4e7c-9c78-47bdad6faa59/exec",true);
xmlhttp.send();
  });