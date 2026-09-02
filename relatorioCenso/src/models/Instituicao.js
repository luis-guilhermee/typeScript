"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instituicao = void 0;
class Instituicao {
    codigo;
    totalAlunos;
    constructor(codigo, totalAlunos) {
        this.codigo = codigo;
        this.totalAlunos = totalAlunos;
    }
    get getCodigo() {
        return this.codigo;
    }
    get getTotalAlunos() {
        return this.totalAlunos;
    }
    set setCodigo(novoCodigo) {
        if (!novoCodigo) {
            console.log("\n ERRO: O codigo não pode ser vazio!");
            return;
        }
        this.codigo = novoCodigo;
        console.log("\n Codigo alterado com sucesso!");
    }
    set setTotalAlunos(novoTotalAlunos) {
        if (novoTotalAlunos < 0) {
            console.log("\n ERRO: O total de alunos não pode ser negativo! Bloqueado.");
            return;
        }
        this.totalAlunos = novoTotalAlunos;
        console.log("\n Total de alunos atualizado com sucesso!");
    }
}
exports.Instituicao = Instituicao;
