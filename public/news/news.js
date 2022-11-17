let main = document.querySelector(".main-btn"),
login = document.querySelector(".login-btn"),
news = document.querySelector(".news-btn");

main.addEventListener('click', function() {
    window.open("http://localhost:8000/", "_self", false);
});

login.addEventListener('click', function() {
    window.open("http://localhost:8000/login", "_self", false);
});

news.addEventListener('click', function() {
    window.open("http://localhost:8000/news?123", "_self");
});

function getID() {
    let query = window.location.href.split("?")[1];
    console.log(query);
    document.querySelector(".id").innerHTML = query;
}