import readLine from "readline-sync";
import { Smartphone } from "./src/models/Smartphone.js";
import { Televisao } from "./src/models/Televisao.js";

let resposta = readLine.questionInt("Qual veiculo deseja cadastrar?\n1 - Smartphone\n2 - Televisao\n")

if (resposta === 1) {
    console.log("=== CADASTRO DE SMARTPHONE ===");
    const novoSmartphone = new Smartphone(
        "China",
        5510,
        3500,
        256,
    );

    console.log(`\nSmartphone cadastrado, fabricante: ${novoSmartphone.getFabricante}`);
    console.log(`Preco: ${novoSmartphone.getPreco}`);


    novoSmartphone.setPreco = readLine.questionInt("\nDigite o Preco atualizado do Smartphone: ");
    novoSmartphone.setArmazenamentoGB = readLine.questionInt("Digite o Armazenamento GB: ");


    console.log("\n================================================");
    console.log("            DADOS COMPLETOS DO SMARTPHONE             ");
    console.log("================================================");


    console.log(`Fabricante:               ${novoSmartphone.getFabricante}`);
    console.log(`Codigo Barras:            ${novoSmartphone.getCodBarras}`);
    console.log(`Armazenamento GB:         ${novoSmartphone.getArmazenamentoGB}`);
    console.log(`Preco:                    ${novoSmartphone.getPreco}`);
    console.log("================================================\n");
} if (resposta === 2) {
    console.log("=== CADASTRO DE TELEVISAO ===");
    const novoTelevisao = new Televisao(
        "EUA",
        5510,
        5000,
        50
    );

    console.log(`\nFabricante: ${novoTelevisao.getFabricante}`);
    console.log(`Polegadas: ${novoTelevisao.getTamanhoPolegadas}`);


    novoTelevisao.setFabricante = readLine.question("\nDigite o Fabricante atualizado do Televisao: ");
    novoTelevisao.setTamanhoPolegadas = readLine.questionInt("Digite o novo Polegadas: ");


    console.log("\n================================================");
    console.log("         DADOS COMPLETOS DA TELEVISAO           ");
    console.log("================================================");


    console.log(`Fabricante:                 ${novoTelevisao.getFabricante}`);
    console.log(`Codigo de Barras:                  ${novoTelevisao.getCodBarras}`);
    console.log(`Preco:                      ${novoTelevisao.getPreco}`);
    console.log(`Polegadas:                  ${novoTelevisao.getTamanhoPolegadas}`);
    console.log("================================================\n");
} else {
    console.log("Opção inválida, tente novamente!")
}