import { Produto } from "./Produto.js";

export class Smartphone extends Produto{
    private armazenamentoGB: number;

    constructor(
        fabricante: string, 
        codBarras: number, 
        preco: number,
        armazenamentoGB: number
    ) {
        super(fabricante, codBarras, preco);
        this.armazenamentoGB = armazenamentoGB;
    }

    public get getArmazenamentoGB(): number { return this.armazenamentoGB; }
    public set setArmazenamentoGB(novoArmazenamentoGB: number) {
        if (!novoArmazenamentoGB) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.armazenamentoGB = novoArmazenamentoGB
    }
}