document.addEventListener("DOMContentLoaded", function(){
	/*var lastResFind = ""; // последний удачный результат

     var copy_page = ""; // копия страницы в ихсодном виде

     function TrimStr(s) {

         s = s.replace(/^\s+/g, '');

         return s.replace(/\s+$/g, '');

     }*/
	searchButton.addEventListener("click", function(){
	
	/*	var obj = window.document.getElementById('searchInput');

         var textToFind;

         if (obj) {
             textToFind = TrimStr(obj.value);//обрезаем пробелы
         } else {
             alert("Введенная фраза не найдена");
             return;
         }
		 
		 if (textToFind == "") {
             alert("Вы ничего не ввели");
             return;
         }
         if (textToFind.length < 2) {
             alert("Слишком короткий текст")
             return;
         }

         if (copy_page.length > 0)
             document.body.innerHTML = copy_page;

         else copy_page = document.body.innerHTML;

         document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");//стираем предыдущие якори для скрола
         document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:yellow; font-size:15px'>" + textToFind + "</a>"); //Заменяем найденный текст ссылками с якорем;
         lastResFind = textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
         window.location = '#' + textToFind;//перемещаем скрол к последнему найденному совпадению*/
		 
		 
		var temp = document.querySelector("#searchInput").value;
		var good = document.querySelector("#name").value;
		var s = s.replace(/^\s+/g, '');
		//var title = document.querySelector("#").value
	//	var obj = window.document.getElementById(inputId);
      //  var textToFind;
		if (good == ""){
			alert ("Error! Enter data for search!");
		}
		else if ( == temp){
		
		}
		
/*		for(var i = 0; i < response.length; i++) {
			var newItem = document.createElement('div');
			var itemsImage = document.createElement('img');
			var descriptionPreview = response[i].description;
			  if (descriptionPreview.length > 110) descriptionPreview = (descriptionPreview.substring(0, 110) + "...");
			newItem.className = 'col';
			itemsImage.setAttribute("src", response[i].image);
		    newItem.innerHTML = '<div class="inner-grid"><div class="inner-grid-col"><p><b>' + response[i].name + '</b></p><img width="100px" height="100px" src="' + response[i].image + '"><p>Price: <b>$' + response[i].price + '</b></p></div><div class="inner-grid-col description"><p class="description">' + descriptionPreview + '</p></div></div>';
		    list.appendChild(newItem);
	    }*/
	}); });
	
	/*function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода

         var obj = window.document.getElementById(inputId);

         var textToFind;

         if (obj) {
             textToFind = TrimStr(obj.value);//обрезаем пробелы
         } else {
             alert("Введенная фраза не найдена");
             return;
         }

         

     }*/
