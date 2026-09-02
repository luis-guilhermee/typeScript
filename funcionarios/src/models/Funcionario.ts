export class Funcionario{
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    get getNome(): string {
        return this.nome;
    }

    get getSalario(): number {
        return this.salario;
    }

    set setNome(novoNome: string) {
        // Regra de negócio: Nome não pode ser vazio
        if (!novoNome) {
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
        console.log("\n Nome alterado com sucesso!");
    }

    set setSalario(novoSalario: number) {
        // Regra de negócio: Salario não pode ser negativo
        if (novoSalario < 0) {
            console.log("\n ERRO: O salario não pode ser negativO! Bloqueado.");
            return;
        }
        this.salario = novoSalario;
        console.log("\n Salario atualizada com sucesso!");
    }
}