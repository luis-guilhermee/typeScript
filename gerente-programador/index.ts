import readLine from "readline-sync";
import { Gerente } from "./src/models/Gerente.js";
import { Programador } from "./src/models/Programador.js";

let resposta = readLine.questionInt("Qual veiculo deseja cadastrar?\n1 - Gerente\n2 - Programador\n")

if (resposta === 1) {
    console.log("=== CADASTRO DE GERENTE ===");
    const novoGerente = new Gerente(
        "Luis",
        5510,
        300000,
        100000,
    );

    console.log(`\nGerente cadastrado: ${novoGerente.getNome}`);
    console.log(`Salario: ${novoGerente.getSalario}`);


    novoGerente.setSalario = readLine.questionInt("\nDigite o Salario atualizado do Gerente: ");
    novoGerente.setBonusAnual = readLine.questionInt("Digite o Bonus Anual: ");


    console.log("\n================================================");
    console.log("            DADOS COMPLETOS DO GERENTE             ");
    console.log("================================================");


    console.log(`Nome:                ${novoGerente.getNome}`);
    console.log(`Matricula:           ${novoGerente.getMatricula}`);
    console.log(`Bonus Anual:         ${novoGerente.getBonusAnual}`);
    console.log(`Salario:             ${novoGerente.getSalario}`);
    console.log("================================================\n");
} if (resposta === 2) {
    console.log("=== CADASTRO DE PROGRAMADOR ===");
    const novoProgramador = new Programador(
        "Luis",
        5510,
        300000,
        "Java Script"
    );

    console.log(`\nProgramador cadastrada: ${novoProgramador.getNome}`);
    console.log(`Linguagem Principal: ${novoProgramador.getLinguagemPrincipal}`);


    novoProgramador.setNome = readLine.question("\nDigite o Nome atualizado do Programador: ");
    novoProgramador.setLinguagemPrincipal = readLine.question("Digite o novo Linguagem Principal: ");


    console.log("\n================================================");
    console.log("         DADOS COMPLETOS DO PROGRAMADOR           ");
    console.log("================================================");


    console.log(`Nome:                       ${novoProgramador.getNome}`);
    console.log(`Matricula:                  ${novoProgramador.getMatricula}`);
    console.log(`Salario:                    ${novoProgramador.getSalario}`);
    console.log(`Linguagem Principal:        ${novoProgramador.getLinguagemPrincipal}`);
    console.log("================================================\n");
} else {
    console.log("Opção inválida, tente novamente!")
}