
document.addEventListener("DOMContentLoaded", function() {

    login.addEventListener('click', function massive () {

            var uname = document.querySelector('#uname').value;
            var pwd = document.querySelector('#pwd').value;
            var user = {
                uname: document.querySelector('#uname').value,
                pwd: document.querySelector('#pwd').value
            };
            var login = document.querySelector('#login').value;
            var array = [];

            if (
                (document.querySelector('#uname').value === "") ||
                (document.querySelector('#pwd').value === "")
            )   {
                alert ("All fields must be filled.");
            }

            else {
                api.login(uname, pwd, function(loginResult){
                    alert("Welcome, " + uname);
                    window.location.href = 'index.html';
                    localStorage.setItem('session', JSON.stringify(loginResult));
                });
            }
//            console.log(array);
//            localStorage.setItem("local1", JSON.stringify(user));
            
           

    
    });
});