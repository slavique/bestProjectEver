
document.addEventListener("DOMContentLoaded", function() {

    signup.addEventListener('click', function massive () {

            var name = document.querySelector('#inp1').value;
            var surname = document.querySelector('#inp2').value;
            var age = document.querySelector('#inp3').value;
            var email = document.querySelector('#inp4').value;
            var sex = document.querySelector('#sel1').value;
            var user = {
                name: document.querySelector('#inp1').value,
                surname: document.querySelector('#inp2').value,
                age: document.querySelector('#inp3').value,
                email: document.querySelector('#inp4').value,
                sex: document.querySelector('#sel1').value
            };
            var signup = document.querySelector('#signup').value;
            var array = [];

            if (
                (document.querySelector('#inp1').value === "") ||
                (document.querySelector('#inp2').value === "") ||
                (document.querySelector('#inp3').value === "") ||
                (document.querySelector('#inp4').value === "")
            )   {
                alert ("All fields must be filled.");
            }

            else {
                alert ("Name: " + user.name + "\nSurname: " + user.surname + "\nAge: " + user.age + "\ne-mail: " + user.email + "\nSex: " + user.sex);
            }
            console.log(array);
            localStorage.setItem("local", JSON.stringify(user));
        }

    )
});