import { ItemBiblioteca } from "./ItemBiblioteca.js";

export class Livro extends ItemBiblioteca{
    private numeroPaginas: number;
    private autor: string;

    constructor(
        titulo: string,
        ano: number,
        numeroPaginas: number,
        autor: string
    ) {
        super(titulo, ano);
        this.numeroPaginas = numeroPaginas;
        this.autor = autor;
    }

    public get getNumeroPaginas(): number { return this.numeroPaginas; }
    public get getAutor(): string { return this.autor; }
    public set setNumeroPaginas(novoNumeroPaginas: number) {
        if (!novoNumeroPaginas) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.numeroPaginas = novoNumeroPaginas
    }
    public set setAutor(novoAutor: string) {
        if (!novoAutor) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.autor = novoAutor
    }
}