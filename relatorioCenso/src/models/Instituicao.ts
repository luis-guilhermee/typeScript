export class Instituicao{
    private codigo: number;
    private totalAlunos: number;

    constructor(codigo: number, totalAlunos: number) {
        this.codigo = codigo;
        this.totalAlunos = totalAlunos;
    }

    get getCodigo(): number {
        return this.codigo;
    }

    get getTotalAlunos(): number {
        return this.totalAlunos;
    }

    set setCodigo(novoCodigo: number) {
    
        if (!novoCodigo) {
            console.log("\n ERRO: O codigo não pode ser vazio!");
            return;
        }
        this.codigo = novoCodigo;
        console.log("\n Codigo alterado com sucesso!");
    }

    set setTotalAlunos(novoTotalAlunos: number) {
        if (novoTotalAlunos < 0) {
            console.log("\n ERRO: O total de alunos não pode ser negativo! Bloqueado.");
            return;
        }
        this.totalAlunos = novoTotalAlunos;
        console.log("\n Total de alunos atualizado com sucesso!");
    }
}