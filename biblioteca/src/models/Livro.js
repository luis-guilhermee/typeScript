export class Livro {
    titulo;
    paginas;
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
    get getTitulo() {
        return this.titulo;
    }
    get getPaginas() {
        return this.paginas;
    }
    set setTitulo(novoTitulo) {
        // Regra de negócio: Titulo não pode ser vazio
        if (!novoTitulo) {
            console.log("\n ERRO: O titulo do produto não pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
        console.log("\n Titulo alterado com sucesso!");
    }
    set setPaginas(novoPaginas) {
        // Regra de negócio: Paginas não pode ser negativo
        if (novoPaginas < 0) {
            console.log("\n ERRO: As paginas não podem ser negativas! Bloqueado.");
            return;
        }
        this.paginas = novoPaginas;
        console.log("\n Paginas atualizadas com sucesso!");
    }
}
