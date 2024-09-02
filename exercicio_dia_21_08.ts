// Exercício 1 e 2

interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}

// Exemplo
const produtoExemplo: Produto = { nome: 'PS5', preco: 5000, categoria: 'Eletrônicos' };

const formaPagamentoExemplo: FormaPagamento = 'cartão';

console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));


type Pessoa = {
    nome: string;
    idade: number;
};

type Empregado = {
    empresa: string;
    salario: number;
};
