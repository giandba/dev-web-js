export class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
    }
    digaNome() {
        console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos`);
    }
}