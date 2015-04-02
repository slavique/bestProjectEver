(function() {
document.addEventListener("DOMContentLoaded", function() {
    $('.filter').addEventListener('change', sorting);
	var response;
	// call render function after itemsList call succeed
	api.getItemsList(render);

	 
	function sorting(e) {
		var arrayToSort = response;

		if (e.target.value == 'low to high') {
		  arrayToSort.sort(function (a, b){
			  return a.price - b.price;
		  });
		} else if (e.target.value == 'high to low') {
		arrayToSort.sort(function (a, b){
			return b.price - a.price;
		  });
		}
		render(arrayToSort);
	}
	
    function render(items) {
		response = items;
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
        }
    }
  });
})();

