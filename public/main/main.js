let main = document.querySelector(".main-btn"),
login = document.querySelector(".login-btn"),
news = document.querySelector(".news-btn");

main.addEventListener('click', function() {
    window.open("http://localhost:8000/", "_self");
});

login.addEventListener('click', function() {
    window.open("http://localhost:8000/login", "_self", false);
});

news.addEventListener('click', function() {
    window.open("http://localhost:8000/news?123", "_self", false);
});