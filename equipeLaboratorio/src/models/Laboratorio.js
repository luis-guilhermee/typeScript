"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laboratorio = void 0;
class Laboratorio {
    bancada;
    numeroMembros;
    constructor(bancada, numeroMembros) {
        this.bancada = bancada;
        this.numeroMembros = numeroMembros;
    }
    get getBancada() {
        return this.bancada;
    }
    get getNumeroMembros() {
        return this.numeroMembros;
    }
    set setBancada(novaBancada) {
        if (!novaBancada) {
            console.log("\n ERRO: A bancada não pode ser vazia!");
            return;
        }
        this.bancada = novaBancada;
        console.log("\n Bancada alterada com sucesso!");
    }
    set setNumeroMembros(novoNumeroMembros) {
        if (novoNumeroMembros < 0) {
            console.log("\n ERRO: O total de membros não pode ser negativo! Bloqueado.");
            return;
        }
        this.numeroMembros = novoNumeroMembros;
        console.log("\n Total de membros atualizado com sucesso!");
    }
}
exports.Laboratorio = Laboratorio;
