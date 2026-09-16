import { Funcionario } from "./Funcionario.js";

export class Programador extends Funcionario{
    private linguagemPrincipal: string;

    constructor(
        nome: string, 
        matricula: number, 
        salario: number,
        linguagemPrincipal: string
    ) {
        super(nome, matricula, salario);
        this.linguagemPrincipal = linguagemPrincipal;
    }

    public get getLinguagemPrincipal(): string { return this.linguagemPrincipal; }
    public set setLinguagemPrincipal(novoLinguagemPrincipal: string) {
        if (!novoLinguagemPrincipal) {
            console.log("\nERRO: Esse campo não pode ser vazio!")
            return;
        }
        this.linguagemPrincipal = novoLinguagemPrincipal
    }
}