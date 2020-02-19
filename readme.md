you must change your "form" and "input" class in <br>
let form = document.querySelector("your-form-class"),<br>
    input = form.querySelectorAll("your-form-input"), <br>
and change your server settings in <br>
request.open("POST","server.php");<br>
