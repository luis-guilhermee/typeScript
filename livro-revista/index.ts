import readLine from "readline-sync";
import { Revista } from "./src/models/Revista.js";
import { Livro } from "./src/models/Livro.js";

let resposta = readLine.questionInt("Qual veiculo deseja cadastrar?\n1 - Revista\n2 - Livro\n")

if (resposta === 1) {
    console.log("=== CADASTRO DE REVISTA ===");
    const novoRevista = new Revista(
        "Ultimate Homem-Aranha",
        2000,
        1,
    );

    console.log(`\nRevista cadastrada: ${novoRevista.getTitulo}`);
    console.log(`Edicao: ${novoRevista.getEdicao}`);


    novoRevista.setTitulo = readLine.question("\nDigite o Titulo atualizado do Revista: ");
    novoRevista.setAno = readLine.questionInt("Digite o novo ano: ");


    console.log("\n================================================");
    console.log("            DADOS COMPLETOS DA REVISTA            ");
    console.log("================================================");


    console.log(`Titulo:             ${novoRevista.getTitulo}`);
    console.log(`Ano:                ${novoRevista.getAno}`);
    console.log(`Edicao:             ${novoRevista.getEdicao}`);
    console.log("================================================\n");
} if (resposta === 2) {
    console.log("=== CADASTRO DE LIVRO ===");
    const novoLivro = new Livro(
        "Ultimate Homem-Aranha",
        2000,
        24,
        "Brian Michael Bendis"
    );

    console.log(`\nLivro cadastrada: ${novoLivro.getTitulo}`);
    console.log(`Autor: ${novoLivro.getAutor}`);


    novoLivro.setTitulo = readLine.question("\nDigite o Titulo atualizado do Livro: ");
    novoLivro.setAno = readLine.questionInt("Digite o novo ano: ");


    console.log("\n================================================");
    console.log("         DADOS COMPLETOS DO LIVRO           ");
    console.log("================================================");


    console.log(`Titulo:                 ${novoLivro.getTitulo}`);
    console.log(`Ano:                    ${novoLivro.getAno}`);
    console.log(`Numero de paginas:      ${novoLivro.getNumeroPaginas}`);
    console.log(`Autor:                  ${novoLivro.getAutor}`);
    console.log("================================================\n");
} else {
    console.log("Opção inválida, tente novamente!")
}