let main = document.querySelector(".main-btn"),
login = document.querySelector(".login-btn"),
news = document.querySelector(".news-btn");

main.addEventListener('click', function() {
    window.open("http://localhost:8000/", "_self", false);
});

login.addEventListener('click', function() {
    window.open("http://localhost:8000/login", "_self");
});

news.addEventListener('click', function() {
    window.open("http://localhost:8000/news?123", "_self", false);
});


let email = document.querySelector(".email"),
password = document.querySelector(".password"),
error1 = document.querySelectorAll(".error")[0],
error2 = document.querySelectorAll(".error")[1],
btn_enter = document.querySelector(".enter"),
check = document.querySelector(".check-box");

function check_email() {
    if(email.value === "") {
        error1.innerHTML = "Это поле не может быть пустым";
        email.style.animation = "shake 1s 0s 1";
        email.style.border = "2px solid red";
        email.style["box-shadow"] = "0px 2px 4px 1px red";
        btn_enter.setAttribute("disabled", "");
    }
    else if((email.value.indexOf('@') === -1) || (email.value.indexOf('.') === -1)) {
        error1.innerHTML = "Введите правильный адрес";
        email.style.border = "2px solid red";
        email.style["box-shadow"] = "0px 2px 4px 1px red";
        btn_enter.setAttribute("disabled", "");
    }
    else {
        error1.innerHTML = "";
        email.style.border = "1px solid rgb(87, 84, 84)";
        email.style["box-shadow"] = "0px 2px 4px 1px rgb(87 84 84)";
        btn_enter.removeAttribute("disabled");
    }
}
function check_password() {
    if(password.value === "") {
        error2.innerHTML = "Это поле не может быть пустым";
        password.style.border = "2px solid red";
        password.style["box-shadow"] = "0px 2px 4px 1px red";
        btn_enter.setAttribute("disabled", "");
    }
    else {
        error2.innerHTML = "";
        password.style.border = "1px solid rgb(87, 84, 84)";
        password.style["box-shadow"] = "0px 2px 4px 1px rgb(87 84 84)";
        btn_enter.removeAttribute("disabled");
    }
}
function sendData() {
    let ch;
    if(check.checked) {
        ch = 1;
    }
    else ch=0;
    document.location = "lk.html?userEmail=" + email.value + "&userPass=" + password.value + "&userCheck=" + ch;
}
email.addEventListener('change', check_email);
password.addEventListener('change', check_password);
btn_enter.addEventListener('click', sendData);