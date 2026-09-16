import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    private taxaRendimento: number;

    constructor(
        titular: string, 
        agencia: number, 
        saldo: number,
        taxaRendimento: number
    ) {
        super(titular, agencia, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    public get getTaxaRendimento(): number { return this.taxaRendimento; }
    public set setTaxaRendimento(novoTaxaRendimento: number) {
        if (!novoTaxaRendimento) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.taxaRendimento = novoTaxaRendimento
    }
}