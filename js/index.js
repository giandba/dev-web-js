//comenta linha
/*comenta bloco de linhas

operadores
= atribui valor

== compara valor
=== compara valor e tipo
> maior que
< menor que
>= maior ou igual que
<= menor ou igual que

* multiplica
/ divide
- subtrai
+ soma
% mod (retorna o resto da divisao)

//laço de repetição
for
while
foreach

*/

const mediaAprovacao = 7.0;

let valores = [];

for (let i = 0; i < 10; i++) {
  valores[i] = "Teste "+ i;
}

for (let i = 0; i < valores.length; i++) {
  console.log( i, valores[i] );  
}




function salvar(){
  console.log("Iniciando salvar");

  const inputs = document.querySelectorAll(".input-validar-vazio");

  for (let i = 0; i < inputs.length; i++) {
    let labelCampo = document.querySelector("label[for='"+inputs[i].id+"']");
    labelCampo.style="color:black;";

    if(inputs[i].value == ""){
      labelCampo.style="color:red;";

      alert("Preencha o campo: "+ labelCampo.innerHTML);
      
      inputs[i].focus();
      return;
    }

  }

  return;
  
  let nomeCompleto = document.querySelector("#txtNomeCompleto").value;
  let periodoCurso = Number(document.querySelector("#txtPeriodo").value);
  let matriculaAtiva = document.querySelector("#chkMatriculaAtiva").checked;
  let nomeCurso = document.querySelector("#txtNomeCurso").value;
  
  periodoCurso++;
  console.log("tipo nomeCompleto", typeof(nomeCompleto));
  console.log("tipo periodoCurso", typeof(periodoCurso));
  console.log("tipo matriculaAtiva", typeof(matriculaAtiva));
  console.log("tipo nomeCurso", typeof(nomeCurso));
  
  console.log("Nome completo: ", nomeCompleto);
  console.log("Periodo curso: ", periodoCurso);
  console.log("Matricula ativa: ", matriculaAtiva);
  console.log("Nome curso: ", nomeCurso);

  console.log("Salvo com sucesso");
}


