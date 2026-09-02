export class Doacao{
    private turma: string;
    private quantidadeCasacos: number;

    constructor(turma: string, quantidadeCasacos: number) {
        this.turma = turma;
        this.quantidadeCasacos = quantidadeCasacos;
    }

    get getTurma(): string {
        return this.turma;
    }

    get getQuantidadeCasacos(): number {
        return this.quantidadeCasacos;
    }

    set setTurma(novaTurma: string) {
    
        if (!novaTurma) {
            console.log("\n ERRO: A turma não pode ser vazia!");
            return;
        }
        this.turma = novaTurma;
        console.log("\n Nome alterado com sucesso!");
    }

    set setQuantidadeCasacos(novaQuantidadeCasacos: number) {
        if (novaQuantidadeCasacos < 0) {
            console.log("\n ERRO: O total de membros não pode ser negativo! Bloqueado.");
            return;
        }
        this.quantidadeCasacos = novaQuantidadeCasacos;
        console.log("\n Total de membros atualizado com sucesso!");
    }
}