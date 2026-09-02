"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    nome;
    salario;
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    get getNome() {
        return this.nome;
    }
    get getSalario() {
        return this.salario;
    }
    set setNome(novoNome) {
        // Regra de negócio: Nome não pode ser vazio
        if (!novoNome) {
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
        console.log("\n Nome alterado com sucesso!");
    }
    set setSalario(novoSalario) {
        // Regra de negócio: Salario não pode ser negativo
        if (novoSalario < 0) {
            console.log("\n ERRO: O salario não pode ser negativO! Bloqueado.");
            return;
        }
        this.salario = novoSalario;
        console.log("\n Salario atualizada com sucesso!");
    }
}
exports.Funcionario = Funcionario;
