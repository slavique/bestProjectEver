document.addEventListener("DOMContentLoaded", function(){

	var temp = document.querySelector("#searchInput").value.toLowerCase();
	var good = document.querySelector("#name").value;
	
	searchInput.onfocus = function() {
		if (this.className == 'searchInput') {
			prepareInput(this);
		}
	}
	function prepareInput(searchInput) { // превратить элемент в простой пустой input
		searchInput.value = '';
	}
		
	searchButton.addEventListener("click", function(){
			//
		if (temp == ""){
			alert ("Error! Enter data for search!");
		}
		else {
			
			
		}
		
	}); 
	
	/*function testinput(re, str){
	   if (str.search(re) != -1)
		  return true
	   else
		  return false
	}
	alert(testinput(/something/, "somestr"))*/
});
