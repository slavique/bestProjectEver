/**
 * Created by dima on 3/28/15.
 */

var $ = document.querySelector.bind(document);

var api = {

    getItemsList: function (callback) {
        var oReq = new XMLHttpRequest();
        callback = callback || function () {};

        oReq.onreadystatechange = function () {
            if (oReq.readyState !== 4) {
                return;
            }
            if (oReq.status === 200) {
                var items = JSON.parse(oReq.responseText);
                console.log(items);
                callback(items);
            }
        };
        oReq.open("get", "https://api.appery.io/rest/1/code/e45fd6bb-81e7-4e7c-9c78-47bdad6faa59/exec", true);
        oReq.send();
    },

    addItem: function (item, callback) {
        var req = new XMLHttpRequest();
        callback = callback || function () {};

        if (typeof item !== 'object') {
            item = {
                name: 'default name',
                price: 0,
                description: 'default description',
                image: 0
            }
        }
        req.onreadystatechange = function () {
            if (req.readyState !== 4) {
                return;
            }
            if (req.status === 200) {
                var data = JSON.parse(req.responseText);
                console.log(data);
                callback(data);
            }
        }
        req.open('post', 'https://api.appery.io/rest/1/code/45d55c9b-2b4c-487d-95c3-d66ffa540e8d/exec');
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(item));
    },

    deleteItem: function (itemId, callback) {
        var req = new XMLHttpRequest();
        callback = callback || function () {};

        req.onreadystatechange = function () {
            if (req.readyState !== 4) {
                return;
            }
            if (req.status === 200) {
                var data = JSON.parse(req.responseText);
                console.log(data);
                callback(data);
            }
        }
        req.open('delete', 'https://api.appery.io/rest/1/db/collections/items/' + itemId);
        req.setRequestHeader('X-Appery-Database-Id', '55131b26e4b0002315f3b76d');
        req.send();
    }

}