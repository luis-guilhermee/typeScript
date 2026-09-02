"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doacao = void 0;
class Doacao {
    turma;
    quantidadeCasacos;
    constructor(turma, quantidadeCasacos) {
        this.turma = turma;
        this.quantidadeCasacos = quantidadeCasacos;
    }
    get getTurma() {
        return this.turma;
    }
    get getQuantidadeCasacos() {
        return this.quantidadeCasacos;
    }
    set setTurma(novaTurma) {
        if (!novaTurma) {
            console.log("\n ERRO: A turma não pode ser vazia!");
            return;
        }
        this.turma = novaTurma;
        console.log("\n Nome alterado com sucesso!");
    }
    set setQuantidadeCasacos(novaQuantidadeCasacos) {
        if (novaQuantidadeCasacos < 0) {
            console.log("\n ERRO: O total de membros não pode ser negativo! Bloqueado.");
            return;
        }
        this.quantidadeCasacos = novaQuantidadeCasacos;
        console.log("\n Total de membros atualizado com sucesso!");
    }
}
exports.Doacao = Doacao;
