function Cronometro() {



}

function pesquisarRef() {

    var autor = document.getElementById("txtAutor").value;
    var assunto = document.getElementById("txtAssunto").value;
    var isbn = document.getElementById("numberIsbn").value;

    if (autor == "" && assunto == "" && isbn == "") {
        alert("Atenção Usuário!\nAo fazer uma Pesquisa, no mínimo um campo deve ser preenchido.");

    } else {
        alterarBtnPesqCanc("Cancelar", "green", "visivel");
        if (document.getElementById("barraProgressoPesquisar").value < 100) {
            document.getElementById("barraProgressoPesquisar").value = document.getElementById("barraProgressoPesquisar").value + 2;
            idCronometro = setTimeout("pesquisarRef()", 1000);

            var time = setInterval(
                function () {
                    var temp = document.getElementById("contador").innerHTML;
                    document.getElementById("contador").innerHTML = Number(temp) - 1;
                },
                1000
            );

        } else {
            alert("Não foi encontrado nada!");
            alterarBtnPesqCanc("Pesquisar", "rgb(183,153,114)", "invisivel");
            document.getElementById("barraProgressoPesquisar").value = 0;
        }
    }
}

function alterarBtnPesqCanc(btnValue, btnColor, btnVisible) {
    document.getElementById("divProgress").className = btnVisible;
    document.getElementById("btnPesquisar").style.backgroundColor = btnColor;
    document.getElementById("btnPesquisar").value = btnValue;
}



/*document.getElementById("btnPesquisar").onclick = function () {
    var testeValue = document.getElementById("btnPesquisar").value;

    if (testeValue === "Pesquisar") {
        pesquisarRef();
        cronometro();
    } else {
        cancelar();
        stopCronometro();
        document.getElementById("barraProgressoPesquisar").value = 0;
    }
}

function pesquisarRef() {

    var autor = document.getElementById("txtAutor").value;
    var assunto = document.getElementById("txtAssunto").value;
    var isbn = document.getElementById("numberIsbn").value;

    if (autor == "" && assunto == "" && isbn == "") {
        alert("Atenção Usuário!\nAo fazer uma Pesquisa, no mínimo um campo deve ser preenchido.");

    } else {
        alterarBtnPesqCanc("Cancelar", "green", "visivel");
        if (document.getElementById("barraProgressoPesquisar").value < 100) {
            document.getElementById("barraProgressoPesquisar").value = document.getElementById("barraProgressoPesquisar").value + 2;
            idCronometro = setTimeout("pesquisarRef()", 1000);

        } else {
            alert("Não foi encontrado nada!");
            alterarBtnPesqCanc("Pesquisar", "rgb(183,153,114)", "invisivel");
            document.getElementById("barraProgressoPesquisar").value = 0;
        }
    }
}

function cancelar() {
    var testeCancela = confirm("Deseja realmente parar a pesquisa?");
    if (testeCancela == true) {
        alterarBtnPesqCanc("Pesquisar", "rgb(183,153,114)", "invisivel");
        clearTimeout(idCronometro);
    }
}

function alterarBtnPesqCanc(btnValue, btnColor, btnVisible) {
    document.getElementById("divProgress").className = btnVisible;
    document.getElementById("btnPesquisar").style.backgroundColor = btnColor;
    document.getElementById("btnPesquisar").value = btnValue;
}

function cronometro() {
    var time = setInterval(
        function () {
            var temp = document.getElementById("contador").innerHTML;
            document.getElementById("contador").innerHTML = Number(temp) - 1;
        },
        1000
    );
}

function stopCronometro(){
    clearInterval(time);
}*/
