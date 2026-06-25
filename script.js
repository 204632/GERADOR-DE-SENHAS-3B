function gerarSenha() {

    const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let senha = "";

    for(let i = 0; i < 12; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    document.getElementById("senha").value = senha;
}
// gerar senha com animação//
function gerarSenha() {

    const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let senha = "";

    for(let i = 0; i < 12; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    let campoSenha = document.getElementById("senha");

    campoSenha.value = senha;

    campoSenha.classList.remove("animar");

    void campoSenha.offsetWidth;

    campoSenha.classList.add("animar");
}