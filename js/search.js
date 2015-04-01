document.addEventListener("DOMContentLoaded", function(){
	searchButton.addEventListener("click", function(){
		var temp = document.querySelector("#searchInput").value;
		if (temp == ""){
			alert ("Error! Enter data for search!");
		}
		else {
		//	api.getItemsList 
			
/*			if (temp.length > 2 && temp.length <2){
				alert ("11");*/
		}
	});
});