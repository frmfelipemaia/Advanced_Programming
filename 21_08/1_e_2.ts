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

// Exercício 2

class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) { }

    descricao(): string {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }

    descricaoDetalhada(): string {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
}

const gerenteExemplo = new Gerente('Felipe', 'CEO', 120000, 'Tecnologia');
console.log(gerenteExemplo.descricaoDetalhada());

// Exercício 2.2

class ContaBancaria {
    constructor(public titular: string, public saldo: number) { }

    exibirSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular, saldo);
    }

    exibirSaldo(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
}

const contaCorrenteExemplo = new ContaCorrente('Felipe', 10000, 3000);
console.log(contaCorrenteExemplo.exibirSaldo());

// Exercício 3



