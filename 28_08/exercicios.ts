/*
Exercício:  
Crie uma função genérica chamada encontrarMaiorElemento que receba um array de 
elementos comparáveis (números ou strings) e retorne o maior elemento do array. 
Certifique-se de que a função funcione corretamente para arrays
de números e de strings.
*/

function encontrarMaiorElemento<T>(array: T[]): T {
    if (array.length === 0) {
        throw new Error('O array não pode estar vazio');
    }

    let maiorElemento = array[0];

    for (const elemento of array) {
        if (elemento > maiorElemento) {
            maiorElemento = elemento;
        }
    }

    return maiorElemento;
}

console.log(encontrarMaiorElemento([10, 20, 30]));
console.log(encontrarMaiorElemento(['gato', 'elefante', 'zebra']));

/*
Exercício:  
Implemente um decorator de método chamado medirTempoDeExecucao 
que meça o tempo que um método demora para ser executado. 
Aplique esse decorator a um método que simula a execução de uma tarefa, 
como calcular a soma de um array grande de números.
*/

function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);
        const resultado = metodoOriginal.apply(this, args);
        console.timeEnd(propertyKey);
        return resultado;
    };

    return descriptor;
}

class Calculadora {
    somarNumeros(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}

const calculadora = new Calculadora();
calculadora.somarNumeros([1, 2, 3, 4, 5]);

/*
Crie uma função chamada verificarEmail que lance um erro personalizado
 EmailInvalidoError caso o email passado não contenha o caractere @. 
 Utilize try/catch para capturar e tratar esse erro quando a função for chamada.
*/

class ErroEmailInvalido extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = 'ErroEmailInvalido';
    }
}

function validarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new ErroEmailInvalido('Email inválido: O email deve conter o caractere "@"');
    }

    console.log('Email válido!');
}

try {
    validarEmail('felipe@gmail.com');
} catch (erro) {
    if (erro instanceof ErroEmailInvalido) {
        console.error(erro.message);
    }
}


