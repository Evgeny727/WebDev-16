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

function getValues() {
    var query = window.location.href.split("?")[1];
    var params = query.split("&");  // результат - массив строк из пар
    // теперь брать по очереди
    document.querySelector(".p_email").innerHTML = "Ваша почта: " + params[0].split("=")[1];
    document.querySelector(".p_pass").innerHTML = "Ваш пароль: " + params[1].split("=")[1];
    if(params[2].split("=")[1] == 1) {
        document.querySelector(".p_check").innerHTML = "Состание чек-бокса: on";
    }
    else {
        document.querySelector(".p_check").innerHTML = "Состание чек-бокса: off";
    }
}