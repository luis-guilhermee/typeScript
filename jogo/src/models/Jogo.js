"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
class Jogo {
    titulo;
    preco;
    constructor(titulo, preco) {
        this.titulo = titulo;
        this.preco = preco;
    }
    get getTitulo() {
        return this.titulo;
    }
    get getPreco() {
        return this.preco;
    }
    set setTitulo(novoTitulo) {
        // Regra de negócio: Titulo não pode ser vazio
        if (!novoTitulo) {
            console.log("\n ERRO: O titulo do produto não pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
        console.log("\n Titulo alterado com sucesso!");
    }
    set setPreco(novoPreco) {
        // Regra de negócio: Preco não pode ser negativo
        if (novoPreco < 0) {
            console.log("\n ERRO: O preco não pode ser negativo! Bloqueado.");
            return;
        }
        this.preco = novoPreco;
        console.log("\n Preco atualizadas com sucesso!");
    }
}
exports.Jogo = Jogo;
