import { Cliente } from './cliente';
import { Financeiro } from './financeiro';
import { Pedido } from './pedido';

const felipeCliente = new Cliente('Felipe', 'frm@pm.me');
const pedidoFelipe = new Pedido(felipeCliente, 'PS5', 5000);

console.log(pedidoFelipe.exibirPedido());

const orcamentoExemplo = new Financeiro.Orcamento(20000, ['Alienware', 'Macintosh']);

console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(5000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calcularDesconto(5000, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
