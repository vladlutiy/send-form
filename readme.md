you must change your "form" and "input" class in script <br>
let form = document.querySelector("your-form-class");<br>
let input = form.querySelectorAll("your-form-input"); <br>
and change your server settings in <br>
request.open("POST","server.php");<br>
