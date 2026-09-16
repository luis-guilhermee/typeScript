import readLine from "readline-sync";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";

let resposta = readLine.questionInt("Qual veiculo deseja cadastrar?\n1 - ContaCorrente\n2 - ContaPoupanca\n")

if (resposta === 1) {
    console.log("=== CADASTRO DA CONTA CORRENTE ===");
    const novoContaCorrente = new ContaCorrente(
        "Luis",
        1,
        200000,
        30000,
    );

    console.log(`\nContaCorrente cadastrada, titular: ${novoContaCorrente.getTitular}`);
    console.log(`Saldo: ${novoContaCorrente.getSaldo}`);


    novoContaCorrente.setSaldo = readLine.questionInt("\nDigite o Saldo atualizado do ContaCorrente: ");
    novoContaCorrente.setLimiteChequeEspecial = readLine.questionInt("Digite o Limite Cheque Especial: ");


    console.log("\n================================================");
    console.log("            DADOS COMPLETOS DA CONTA CORRENTE             ");
    console.log("================================================");


    console.log(`Titular:                  ${novoContaCorrente.getTitular}`);
    console.log(`Agencia:                  ${novoContaCorrente.getAgencia}`);
    console.log(`Armazenamento GB:         ${novoContaCorrente.getLimiteChequeEspecial}`);
    console.log(`Saldo:                    ${novoContaCorrente.getSaldo}`);
    console.log("================================================\n");
} if (resposta === 2) {
    console.log("=== CADASTRO DE CONTA POUPANCA ===");
    const novoContaPoupanca = new ContaPoupanca(
        "Luis",
        1,
        200000,
        5,
    );

    console.log(`\nTitular: ${novoContaPoupanca.getTitular}`);
    console.log(`Taxa de Rendimento (%): ${novoContaPoupanca.getTaxaRendimento}`);


    novoContaPoupanca.setTitular = readLine.question("\nDigite o Titular atualizado do Conta Poupanca: ");
    novoContaPoupanca.setTaxaRendimento = readLine.questionInt("Digite o novo Rendimento: ");


    console.log("\n================================================");
    console.log("         DADOS COMPLETOS DA CONTA POUPANCA           ");
    console.log("================================================");


    console.log(`Titular:                         ${novoContaPoupanca.getTitular}`);
    console.log(`Agencia:                         ${novoContaPoupanca.getAgencia}`);
    console.log(`Saldo:                           ${novoContaPoupanca.getSaldo}`);
    console.log(`Taxa de Rendimento (%):          ${novoContaPoupanca.getTaxaRendimento}`);
    console.log("================================================\n");
} else {
    console.log("Opção inválida, tente novamente!")
}