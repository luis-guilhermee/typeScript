export class ItemBiblioteca {
    private titulo: string;
    private ano: number;

    constructor(
        titulo: string, 
        ano: number
    ) {
        this.titulo = titulo;
        this.ano = ano;
    }

    public get getTitulo(): string { return this.titulo; }
    public get getAno(): number { return this.ano; }

    public set setTitulo(novoTitulo: string) {
        if (!novoTitulo) {
            console.log("\nERRO: A titulo não pode ser vazio!")
            return;
        }
        this.titulo = novoTitulo
    }
    public set setAno(novoAno: number) {
        if (!novoAno) {
            console.log("\nERRO: O ano não pode ser vazio!")
            return;
        }
        this.ano = novoAno
    }
}