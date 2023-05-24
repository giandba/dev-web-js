let aluno = {
    nome: "",
    curso: "",
    notas: [],
    validar: () => {
        if(aluno.nome == "") {
    alert("nome é obrigatório");
    return false;
}
if (aluno.curso == "") {
    alert("curso é obrigatório");
    return false;
}
if (aluno.notas.length == 0) {
    alert("notas é obrigatório");
    return false;
}

return true;
    },
calcularMedia: () => {
    if (aluno.validar() == false) {
        return;
    }
    let somaNota = 0;
    aluno.notas.forEach((x) => {
        somaNota += x;
    });
    return somaNota / aluno.notas.length;
}
};

aluno.nome = "Giancarlo";
aluno.curso = "Eng Soft";
aluno.notas.push(8);
aluno.notas.push(9);
console.log("aluno", aluno);
console.log("aluno - validar", aluno.validar());
console.log("aluno - validar", aluno.calcularMedia());

var carro = {
    cor: "",
    marca: "",
    modelo: ""
};

var consultaCep = {
    cep: "",
    resultado: {},
    consultar: () => {
        axios.get("https://viacep.com.br/ws/82821020/json/")
            .then(function (response) {
                // handle success
                console.log(response.data);
                console.log(response.data.logradouro);
                console.log(response.data.localidade);
                console.log(response.data.uf);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        console.log("Teste");

        /*REST FULL
        VERBOS (GET, POST, PUT, DELETE)
        
        GET  https://meuservidor.com/alunos
        GET  https://meuservidor.com/alunos?nome=Giancarlo
        POST https://meuservidor.com/alunos {aluno}
        PUT  https://meuservidor.com/alunos {aluno}
        DELETE  https://meuservidor.com/alunos {aluno}
        */


    }
};
consultaCep.consultar();

function salvar() {
    var nome = document.querySelector("");
    aluno.nome = nome;

    if (validar(aluno)) {
        alert("Salvo com sucesso");
    }
}
function validar(aluno) {
    if (aluno.nome == "") {
        return false;
    }
    if (aluno.curso == "") {
        return false;
    }

    return true;
}
/*
function fnAdicionarNota1(nota){
    aluno.notas.push(nota);
}
var fnAdicionarNota2 = (nota)=>{
    aluno.notas.push(nota);
}



var texto = "";
console.log(texto, typeof(texto));
var valores = [];
console.log(valores, typeof(valores));
var numero = 7;
console.log(numero, typeof(numero));

*/