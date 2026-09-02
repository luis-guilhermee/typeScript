export class Ingresso{
    private filme: string;
    private assento: number;

    constructor(filme: string, assento: number) {
        this.filme = filme;
        this.assento = assento;
    }

    get getFilme(): string {
        return this.filme;
    }

    get getAssento(): number {
        return this.assento;
    }

    set setFilme(novaFilme: string) {
    
        if (!novaFilme) {
            console.log("\n ERRO: O filme não pode ser vazia!");
            return;
        }
        this.filme = novaFilme;
        console.log("\n Filme alterado com sucesso!");
    }

    set setAssento(novoAssento: number) {
        if (novoAssento < 0) {
            console.log("\n ERRO: O assento não pode ser negativo! Bloqueado.");
            return;
        }
        this.assento = novoAssento;
        console.log("\n Assento atualizado com sucesso!");
    }
}