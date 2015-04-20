(function() {
document.addEventListener("DOMContentLoaded", function() {
    $('.sorting').addEventListener('change', sorting);
    $('#filter').addEventListener('click', filter);
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
	};

	function filter() {
		var arrayToFilter = response;
		var prices = [];
		var objects = [];
		for(var i = 0; i < arrayToFilter.length; i++) {
			prices.push(arrayToFilter[i].price)
		};
		console.log(prices);
		function filteringInput(element) {
			return element <= 30;
		};
		filtered = prices.filter(filteringInput);
		console.log(filtered);
		for (var i = 0; i < arrayToFilter.length; i++) {
			for(var j = 0; j < filtered.length; j++) {
				if(filtered[j] == arrayToFilter[i].price) {
					objects.push(arrayToFilter[i]);
				}
			}
		}
		render(objects);
	};

	
    function render(items) {
		response = items;
		var list = $('.grid');
		list.innerHTML = "";
		for(var i = 0; i < items.length; i++) {
			var newItem = document.createElement('div');
			var itemsImage = document.createElement('img');
			var descriptionPreview = items[i].description;
			if (descriptionPreview.length > 110) descriptionPreview = (descriptionPreview.substring(0, 110) + "...");
			newItem.className = 'col';
			itemsImage.setAttribute("src", items[i].image);
			newItem.innerHTML = '<a class="inner-grid" href="item.html#id=' + items[i]._id + '' +
			'"><div class="inner-grid-col-left"><div style="width: 100px; height: 120px;"><img class="item-image" width="100px" src="'
			+ items[i].image + '"></div><p class="item-price">Price: <b>$' + items[i].price + '</b></p></div><div class="inner-grid-col' +
			' description"><p class="item-name"><b>' + items[i].name + '</b></p><p class="description">' + descriptionPreview + '</p></div></a>';
			list.appendChild(newItem);
        }
    }
  });
})();

