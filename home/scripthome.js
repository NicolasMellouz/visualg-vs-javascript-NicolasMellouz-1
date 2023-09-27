let usuario =JSON.parse(localStorage.getItem("home"));
document.getElementById("titulo").innerHTML = "Bem vindo, "+usuario.login
    function index() {
        window.location.href = "../index.html";
        }
    
