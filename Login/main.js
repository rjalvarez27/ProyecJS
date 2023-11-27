const btn = document.getElementById("btn")
const tag = document.getElementsByTagName("input")
const alerta = document.getElementById("alerta");
const check = document.getElementById("listo")

btn.addEventListener('click', () => {
    let warnings = "";
    alerta.innerHTML = "";
    let entrar = false;
    let regexE = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regexP = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{7,}/;
    let regexArray = [regexE, regexP];
    let array = ["Email", "Password"];
    for (let i = 0; i < tag.length; i++) {
        if (tag[i].value == 0 || regexArray[i].test(tag[i].value) == false) {
            warnings += ` ${array[i]} Incorrecto <br> `;
            entrar = true;
            var one = entrar;
        };
    }
    if (one) {
        alerta.innerHTML = warnings;
    } else {
        check.style.display = "flex";
        window.location.replace("/src/Index.html");
    };
});

