var total = document.querySelector("#total");

var noites1 = document.querySelector('[name="numeroNoites1"]');

var noites2 = document.querySelector('[name="numeroNoites2"]')

var email = document.getElementsByName("email")[0];

var emailConfirma = document.getElementsByName("emailConfirma")[0];


function updateTotal() {
    total.value = (noites1.value * 99) + (noites2.value * 10);
}


function verificaEmail() {
    if (email.value != emailConfirma.value) {

        alert("Os emails devem coincidir!");
        return false;
    }
    return true;
}

function dataAtual() {
    var date = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })

    var dia = date.substr(2, 1);
    var mes = date.substr(0, 1);
    var ano = date.substr(4, 4);

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;

    document.getElementsByClassName('data')[0].setAttribute("min", ano + '-' + mes + '-' + dia);
}

//dataAtual();

