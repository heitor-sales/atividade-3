class ClienteEspecial extends Cliente {

    private dependentes: Array<string>;
    private dependente: string;

    constructor(nome: string, cpf: string, conta: Conta, dependente: string) {
        super(nome, cpf, conta);
        this.dependente = dependente;
        this.dependentes = new Array<string>();
        this.dependentes.push(dependente);
    }

    inserir (dependente: string) {
        this.dependentes.push(dependente);
    }

    pesquisar(nome: string): string {
        return this.dependentes.find(
            dependente => dependente === nome
        );
    }
}