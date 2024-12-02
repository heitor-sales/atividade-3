let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();
clienteController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const cliente1 = new Cliente ('José', '12345678910', c1);
const cliente2 = new Cliente ('Maria', '12345678911', p1 );

const clientes = new Clientes();

clientes.inserir(cliente1);
clientes.inserir(cliente2);

console.log(clientes.listar());
console.log(clientes.remover('12345678910'));
console.log(clientes.pesquisar('12345678911'));