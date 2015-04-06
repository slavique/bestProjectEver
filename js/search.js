document.addEventListener("DOMContentLoaded", function(){

//	var temp = document.querySelector("#searchInput").value.toLowerCase();
	
//	var good = document.querySelector("#name").value;
	
/*	searchInput.onfocus = function() {
		if (this.className == 'searchInput') {
			prepareInput(this);
		}
	}
	function prepareInput(searchInput) { // превратить элемент в простой пустой input
		searchInput.value = '';
	}*/
	
	searchButton.addEventListener("click", function(){
		var temp = document.querySelector("#searchInput").value;
		if (temp == ""){
			alert ("Error! Enter data for search!");
			return;
		}
		
		var supported = false;
        var found = false;
		var item = document.querySelector(".grid").value;
        if (item.find) {        // Firefox, Google Chrome, Safari
            supported = true;
			found = item.find (temp);
        }
		
		else {
            if (document.selection && document.selection.createRange) { // Internet Explorer, Opera before version 10.5
				var textRange = document.selection.createRange ();
                if (textRange.findText) {   // Internet Explorer
					supported = true;
					if (textRange.text.length > 0) {
						textRange.collapse (true);
						textRange.move ("character", 1);
					}

					found = textRange.findText (temp);
					if (found) {
						textRange.select ();
					}
                }
            }
        }
		
		if (supported) {
            if (!found) {
                alert ("The following text was not found:\n" + temp);
            }
        }
        else {
            alert ("Your browser does not support this example!");
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
