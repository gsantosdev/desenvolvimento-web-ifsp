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
    var date = new Date().toLocaleString("sv-fi", { timeZone: "America/Sao_Paulo" })

    date = date.split(" ")[0];
    console.log(date);

    document.getElementsByClassName('data')[0].setAttribute('min', date);
}