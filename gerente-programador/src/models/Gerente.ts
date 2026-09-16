import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    private bonusAnual: number;

    constructor(
        nome: string, 
        matricula: number, 
        salario: number,
        bonusAnual: number
    ) {
        super(nome, matricula, salario);
        this.bonusAnual = bonusAnual;
    }

    public get getBonusAnual(): number { return this.bonusAnual; }
    public set setBonusAnual(novoBonusAnual: number) {
        if (!novoBonusAnual) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.bonusAnual = novoBonusAnual
    }
}