export class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    get getNome() {
        return this.nome;
    }
    get getPreco() {
        return this.preco;
    }
    set setNome(novoNome) {
        if (!novoNome) {
            console.log("\n O nome não pode estar em branco!");
            return;
        }
        this.nome = novoNome;
        console.log("\n Nome registrado com sucesso!");
    }
    set setPreco(novoPreco) {
        if (novoPreco < 0) {
            console.log("\n O preço não pode ser menor que zero!");
            return;
        }
        this.preco = novoPreco;
        console.log("\n Preço registrado com sucesso!");
    }
}
