"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingresso = void 0;
class Ingresso {
    filme;
    assento;
    constructor(filme, assento) {
        this.filme = filme;
        this.assento = assento;
    }
    get getFilme() {
        return this.filme;
    }
    get getAssento() {
        return this.assento;
    }
    set setFilme(novaFilme) {
        if (!novaFilme) {
            console.log("\n ERRO: O filme não pode ser vazia!");
            return;
        }
        this.filme = novaFilme;
        console.log("\n Filme alterado com sucesso!");
    }
    set setAssento(novoAssento) {
        if (novoAssento < 0) {
            console.log("\n ERRO: O assento não pode ser negativo! Bloqueado.");
            return;
        }
        this.assento = novoAssento;
        console.log("\n Assento atualizado com sucesso!");
    }
}
exports.Ingresso = Ingresso;
