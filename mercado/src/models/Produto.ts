export class Produto{
    private nome:string;
    private preco:number;

    constructor(nome:string, preco:number) {
        this.nome = nome;
        this.preco = preco;
    }

    get getNome():string {
        return this.nome;
    }

    get getPreco():number {
        return this.preco;
    }

    set setNome(novoNome:string){
        if (!novoNome) {
            console.log("\nO nome não pode estar em branco!");
            return;
        }
        this.nome = novoNome;
        console.log("\nNome registrado com sucesso!")
    }

    set setPreco(novoPreco:number){
        if (novoPreco < 0){
            console.log("\nO preço não pode ser menor que zero!")
            return;
        }
        this.preco = novoPreco
        console.log("\nPreço registrado com sucesso!")
    }
}