const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");


function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "erro um dos dois aí";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "nenhum cadastro paizao"
    } else{
    for (let usuario of bancoDeDados) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "ta logado patrao";
            localStorage.setItem("home", JSON.stringify(usuario));
            window.location.href = "./home/home.html"
            break;
        }
    }
}
    alert(mensagem);
}
function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null){
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("cadastro no sucesso pode logar agora")
        window.location.href = "index.html";
    } else {
        alert("coloca certo as senhas fi");
    }
}



function registro() {
    window.location.href = "registro.html";
    }


