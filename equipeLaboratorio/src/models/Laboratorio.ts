export class Laboratorio{
    private bancada: string;
    private numeroMembros: number;

    constructor(bancada: string, numeroMembros: number) {
        this.bancada = bancada;
        this.numeroMembros = numeroMembros;
    }

    get getBancada(): string {
        return this.bancada;
    }

    get getNumeroMembros(): number {
        return this.numeroMembros;
    }

    set setBancada(novaBancada: string) {
    
        if (!novaBancada) {
            console.log("\n ERRO: A bancada não pode ser vazia!");
            return;
        }
        this.bancada = novaBancada;
        console.log("\n Bancada alterada com sucesso!");
    }

    set setNumeroMembros(novoNumeroMembros: number) {
        if (novoNumeroMembros < 0) {
            console.log("\n ERRO: O total de membros não pode ser negativo! Bloqueado.");
            return;
        }
        this.numeroMembros = novoNumeroMembros;
        console.log("\n Total de membros atualizado com sucesso!");
    }
}