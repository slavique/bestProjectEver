
document.addEventListener("DOMContentLoaded", function() {

    signup.addEventListener('click', function massive () {

            var name = document.querySelector('#name').value;
            var surname = document.querySelector('#srnm').value;
            var age = document.querySelector('#age').value;
            var email = document.querySelector('#eml').value;
            var sex = document.querySelector('#sex').value;
            var uname = document.querySelector('#uname').value;
            var pwd = document.querySelector('#pwd').value;
            var user = {
                name: document.querySelector('#name').value,
                surname: document.querySelector('#srnm').value,
                age: document.querySelector('#age').value,
                email: document.querySelector('#eml').value,
                sex: document.querySelector('#sex').value,
                uname: document.querySelector('#uname').value,
                pwd: document.querySelector('#pwd').value
            };
            var signup = document.querySelector('#signup').value;
            var array = [];

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

            else {
                alert ("Name: " + user.name + "\nSurname: " + user.surname + "\nAge: " + user.age + "\ne-mail: " + user.email + "\nPassword: " + user.pwd + "\nSex: " + user.sex + "\nUsername " + user.uname);
            }
            console.log(array);
            localStorage.setItem("local", JSON.stringify(user));
        }

    )
});