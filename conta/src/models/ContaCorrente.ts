import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    private limiteChequeEspecial: number;

    constructor(
        titular: string, 
        agencia: number, 
        saldo: number,
        limiteChequeEspecial: number
    ) {
        super(titular, agencia, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public get getLimiteChequeEspecial(): number { return this.limiteChequeEspecial; }
    public set setLimiteChequeEspecial(novoLimiteChequeEspecial: number) {
        if (!novoLimiteChequeEspecial) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.limiteChequeEspecial = novoLimiteChequeEspecial
    }
}