export class Funcionario {
    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(
        nome: string, 
        matricula: number, 
        salario: number
    ) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    public get getNome(): string { return this.nome; }
    public get getMatricula(): number { return this.matricula; }
    public get getSalario(): number { return this.salario; }

    public set setNome(novoNome: string) {
        if (!novoNome) {
            console.log("\nERRO: A nome não pode ser vazio!")
            return;
        }
        this.nome = novoNome
    }
    public set setMatricula(novoMatricula: number) {
        if (!novoMatricula) {
            console.log("\nERRO: O matricula não pode ser vazio!")
            return;
        }
        this.matricula = novoMatricula
    }
    public set setSalario(novoSalario: number) {
        if (!novoSalario) {
            console.log("\nERRO: O salario não pode ser vazio!")
            return;
        }
        this.salario = novoSalario
    }
}