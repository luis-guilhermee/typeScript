import { ItemBiblioteca } from "./ItemBiblioteca.js";

export class Revista extends ItemBiblioteca{
    private edicao: number;

    constructor(
        titulo: string,
        ano: number,
        edicao: number
    ) {
        super(titulo, ano);
        this.edicao = edicao;
    }

    public get getEdicao(): number { return this.edicao; }
    public set setEdicao(novoEdicao: number) {
        if (!novoEdicao) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.edicao = novoEdicao
    }
}