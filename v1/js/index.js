import {Pessoa} from './models/pessoa.js';
import {Aluno} from './models/aluno.js';

function fnLoad(){
    document.querySelector("#btnSalvar").addEventListener('click', fnClick);
}

function fnClick(){
    var element = this;
    console.log("fnClick", element);

    var nome = document.querySelector("#txtNome").value;
    var aluno = new Aluno(nome);
    aluno.digaNome();
    aluno.adicionarNota(7.5);
    aluno.adicionarNota(8.0);
    aluno.mostrarNotas();
    aluno.calcularMedia();
}
function fnTestClass(){

    var pessoa = new Pessoa("Giancarlo");
    pessoa.idade = 37;
    pessoa.digaNome();

    var aluno = new Aluno("Fulano");
    aluno.adicionarNota(7.5);
    aluno.adicionarNota(8.0);
    aluno.mostrarNotas();

    
    aluno.calcularMedia();
}

fnLoad();
fnTestClass();