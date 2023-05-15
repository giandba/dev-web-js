import { Pessoa } from "./pessoa.js";

export class Aluno extends Pessoa {
    constructor(nome) {
        super(nome);
        this.notas = [];
    }
    adicionarNota(nota) {
        this.notas.push(nota);
    }
    mostrarNotas() {
        console.log("Exibindo notas:");
        this.notas.forEach((x, idx) => {
            console.log(idx, x);
        });
    }
    calcularMedia() {
        let soma = 0;
        this.notas.forEach((x, idx) => {
            soma += x;
        });
        console.log("Media: ", soma / this.notas.length);
    }
}