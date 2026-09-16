import { Produto } from "./Produto.js";

export class Televisao extends Produto{
    private tamanhoPolegadas: number;

    constructor(
        fabricante: string, 
        codBarras: number, 
        preco: number,
        tamanhoPolegadas: number
    ) {
        super(fabricante, codBarras, preco);
        this.tamanhoPolegadas = tamanhoPolegadas;
    }

    public get getTamanhoPolegadas(): number { return this.tamanhoPolegadas; }
    public set setTamanhoPolegadas(novoTamanhoPolegadas: number) {
        if (!novoTamanhoPolegadas) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.tamanhoPolegadas = novoTamanhoPolegadas
    }
}