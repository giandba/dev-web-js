document.addEventListener('load', fnCarregarPagina());
const mediaAprovacao = 8;

/*

CRIAR CAMPO NOTA, COM BOTAO ADICIONAR NOTA
CHAMAR A FUNÇÃO gestaoAluno.adicionarNota


*/

var gestaoAluno = {
    dados:{
        nomeAluno: "",
        nomeCurso: "",
        notas: []
    },
    adicionarNota: ()=>{
        var nota = document.querySelector("#txtNota");
        gestaoAluno.dados.notas.push(nota.value);
    },
    lerDadosFormulario: ()=>{
        const txtNome = document.querySelector("#txtNome");
        const slCurso = document.querySelector("#slCurso");

        gestaoAluno.dados.nomeAluno = txtNome.value;
        gestaoAluno.dados.nomeCurso = slCurso.value;
    },
    salvar: ()=>{
        gestaoAluno.lerDadosFormulario();
        gestaoAluno.mostrar();
    },
    mostrar:()=>{
        console.log("nomeAluno",gestaoAluno.dados.nomeAluno);
        
        var media = calculosUtil.retornaMedia(gestaoAluno.dados.notas);
        console.log("Media:",media);
    }
};


var calculosUtil = {
    retornaMedia: (valores)=>{
        var soma = 0;
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];            
        }
        return soma / valores.length;
    }
}





function fnSalvar() {    
    const txtNome = document.querySelector("#txtNome").value;
    const txtPeriodo = document.querySelector("#txtPeriodo").value;
    const slCurso = document.querySelector("#slCurso").value;
    const slMateria = document.querySelector("#slMateria").value;
    const slDiaSemana = document.querySelector("#slDiaSemana").value;

    if(txtNome == ""){
        alert("Preencha nome");
        return;
    }
    if(txtPeriodo < 1 || txtPeriodo > 10 ){
        alert("Periodo invalido");
        return;
    }

    let objetoAluno = {
        nomeAluno: txtNome,
        periodoCurso: txtPeriodo,
        nomeCurso: slCurso,
        nomeMateria: slMateria,
        materiaDiaSemana: slDiaSemana,
        mediaSemestre : 7.5,
        matriculaOK: true,
        RetornaAprovado: (mediaAprovacao) => {
            if(objetoAluno.mediaSemestre >= mediaAprovacao){
                return true;
            }
            else {
                return false;
            }
        }
    };
    
    fnMostraAluno(objetoAluno);

    alert("Salvo com sucesso");
}

function fnMostraAluno(aluno){

    console.log("nomeAluno",aluno.nomeAluno);
    console.log("mediaSemestre", aluno.mediaSemestre);
    console.log("matriculaOK", aluno.matriculaOK);
    console.log("Aprovado:", aluno.RetornaAprovado(mediaAprovacao));
}

function fnCarregarCurso() {
    const cursos = ["Eng Sof", "Eng Mec", "Enfermagem"];
    const selectElement = document.querySelector("#slCurso");

    var htmlOption = "<option value=''>Selecione</option>";
    cursos.forEach((x, i) => {
        htmlOption += `<option value='${i}'>${x}</option>`;
    });
    selectElement.innerHTML = htmlOption;
}

function fnCarregarMateria() {
    const materias = ["Des Web", "Analise Sist", "Programa O.O."];
    const selectElement = document.querySelector("#slMateria");

    var htmlOption = "<option value=''>Selecione</option>";
    materias.forEach((x, i) => {
        htmlOption += `<option value='${i}'>${x}</option>`;
    });
    selectElement.innerHTML = htmlOption;
}

function fnCarregarDiaSemana(){
    const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const selectElement = document.querySelector("#slDiaSemana");
    var htmlOption = "<option value=''>Selecione</option>";
    for (let i = 0; i < diasSemana.length; i++) {
        htmlOption += `<option value='${i}'>${diasSemana[i]}</option>`;
    }
    selectElement.innerHTML = htmlOption;
};

function fnCarregarPagina() {
    console.log("Pagina carregada");
    fnCarregarCurso();
    fnCarregarMateria();
    fnCarregarDiaSemana();
}