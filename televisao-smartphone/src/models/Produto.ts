export class Produto {
    private fabricante: string;
    private codBarras: number;
    private preco: number;

    constructor(
        fabricante: string, 
        codBarras: number, 
        preco: number
    ) {
        this.fabricante = fabricante;
        this.codBarras = codBarras;
        this.preco = preco;
    }

    public get getFabricante(): string { return this.fabricante; }
    public get getCodBarras(): number { return this.codBarras; }
    public get getPreco(): number { return this.preco; }

    public set setFabricante(novoFabricante: string) {
        if (!novoFabricante) {
            console.log("\nERRO: O fabricante não pode ser vazio!")
            return;
        }
        this.fabricante = novoFabricante
    }
    public set setCodBarras(novoCodBarras: number) {
        if (!novoCodBarras) {
            console.log("\nERRO: O codigo barras não pode ser vazio!")
            return;
        }
        this.codBarras = novoCodBarras
    }
    public set setPreco(novoPreco: number) {
        if (!novoPreco) {
            console.log("\nERRO: O preco não pode ser vazio!")
            return;
        }
        this.preco = novoPreco
    }
}