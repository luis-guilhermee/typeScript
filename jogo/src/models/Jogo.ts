export class Jogo{
    private titulo: string;
    private preco: number;

    constructor(titulo: string, preco: number) {
        this.titulo = titulo;
        this.preco = preco;
    }

    get getTitulo(): string {
        return this.titulo;
    }

    get getPreco(): number {
        return this.preco;
    }

    set setTitulo(novoTitulo: string) {
        // Regra de negócio: Titulo não pode ser vazio
        if (!novoTitulo) {
            console.log("\n ERRO: O titulo do produto não pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
        console.log("\n Titulo alterado com sucesso!");
    }

    set setPreco(novoPreco: number) {
        // Regra de negócio: Preco não pode ser negativo
        if (novoPreco < 0) {
            console.log("\n ERRO: O preco não pode ser negativo! Bloqueado.");
            return;
        }
        this.preco = novoPreco;
        console.log("\n Preco atualizadas com sucesso!");
    }
}