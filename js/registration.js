
document.addEventListener("DOMContentLoaded", function() {

    var signup = document.querySelector('#signup');


    signup.addEventListener('click', function () {
            var user = {
                name: document.querySelector('#name').value,
                surname: document.querySelector('#srnm').value,
                age: document.querySelector('#age').value,
                email: document.querySelector('#eml').value,
                sex: document.querySelector('#sex').value,
                username: document.querySelector('#uname').value,
                password: document.querySelector('#pwd').value
            };

            if (
                (document.querySelector('#name').value === "") ||
                (document.querySelector('#srnm').value === "") ||
                (document.querySelector('#age').value === "") ||
                (document.querySelector('#eml').value === "") ||
                (document.querySelector('#sex').value === "") ||
                (document.querySelector('#uname').value === "") ||
                (document.querySelector('#pwd').value === "")
            )   {
                alert ("All fields must be filled.");
            }

            api.registration (user, function (response){
               alert ("User registered successfully. Info: \nid: " + response._id + "\nsessionToken: " +
               response.sessionToken)
            });
        }

    )
});