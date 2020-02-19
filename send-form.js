let message = {
    loading: "Loading...",
    success: "Thanks! We are call you",
    failure: "Something have problem..."
};
let form = document.querySelector("your-form-class"),
    input = form.querySelectorAll("your-form-input"), 
    statusMessage = document.createElement("div");
    statusMessage.classList.add("your-class");

function formPost(formClass, formInput){
    formClass.addEventListener("submit", function(e) {
        e.preventDefault();
        formClass.appendChild(statusMessage);   
        let request = new XMLHttpRequest();
        request.open("POST","server.php");
        request.setRequestHeader("Content-type", "aplication/json; charset=utf-8"); 
        let formData = new FormData(formClass);
        let obj = {};   
        formData.forEach(function (value,key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);    
        request.addEventListener("readystatechange", function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            }
            if (request.readyState == 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < formInput.length; i++) {
            formInput[i].value = "";
        }
    });
}
formPost(form, input);

