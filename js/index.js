function fnPaginaCarregada() {
    console.log("Carregando pagina...");

    var nomeAluno = "Aluno 123";
    var nomeCurso = "Curso 123";
    var periodo = 1;
    var matriculaOk = true;

    document.querySelector("#txtNome").value = nomeAluno;
    document.querySelector("#txtCurso").value = nomeCurso;
    document.querySelector("#txtPeriodo").value = periodo;
    document.querySelector("#chkMatriculaOk").checked = matriculaOk;


    console.log("Pagina carrega");
}

function fnSalvar() {
    console.log("Salvando pagina...");

    var nomeAluno = document.querySelector("#txtNome").value;
    var nomeCurso = document.querySelector("#txtCurso").value;
    var periodo = document.querySelector("#txtPeriodo").value;
    var matriculaOk = document.querySelector("#chkMatriculaOk").checked;

    if (nomeAluno == "") {
        alert("Preencha nome do aluno");
        return;
    }
    if (nomeCurso == "") {
        alert("Preencha nome do curso");
        return;
    }
    if (periodo <= 0 || periodo > 9) {
        alert("Periodo inválido");
        return;
    }

    console.log(nomeAluno);
    console.log(nomeCurso);
    console.log(periodo);
    console.log(matriculaOk);

    alert("Salvo com sucesso");
}

function fnArray() {
    var diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    // console.log(diasSemana[0]);//dom
    // console.log(diasSemana[1]);//seg
    // console.log(diasSemana[2]);
    // console.log(diasSemana[3]);
    // console.log(diasSemana[4]);
    // console.log(diasSemana[5]);
    // console.log(diasSemana[6]);
    console.log(diasSemana.length)

    //LAÇOS DE REPETIÇÃO

    //WHILE - ENQUANTO INDICE FOR < 7 FAÇA...
    var indexW = 0;
    while (indexW < diasSemana.length) {
        console.log("while:", diasSemana[indexW]);
        indexW++;
    }

    //DO-WHILE
    var indexDw = 0;
    do {
        console.log("do-while:", diasSemana[indexDw]);
        indexDw++;
    } while (indexDw < diasSemana.length);

    //FOR - PARA(INICIO; CONDICAO; INCREMENTO)
    for (var i = 0; i < diasSemana.length; i++) {
        console.log("FOR:", diasSemana[i]);
    }

    //FOREACH
    diasSemana.forEach((x) => {
        console.log("forEach", x);
    });

    let diasAno = [];
    let dia;
    for (let idx = 0; idx < 365; idx++) {
        dia = idx + 1;
        diasAno[idx] = dia;
    }

    diasAno.forEach((x) => {
        console.log("dia do Ano: ", x);
    });

    for (let idx = 0; idx < diasAno.length; idx++) {
        console.log("dia do Ano: ", diasAno[idx]);
    }
}


