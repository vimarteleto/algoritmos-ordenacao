function bubbleSort(vetor, fnComp) {
    do {
        trocas = 0

        // Percurso do vetor até a penultima posição
        for(let i = 0; i <= vetor.length - 2; i++) {

            // Troca de valores por desestruturação do vetor
            if(fnComp(vetor[i], vetor[i + 1])) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
        }

    }
    while(trocas > 0)
}

// Importação e divisão dos dados
const testeTotal = require('./dados/covid-19.js')
const teste1000 = testeTotal.slice(0, 1000) // Subvetor com 1000 registros
const teste25000 = testeTotal.slice(0, 25000) // Subvetor com 25000 registros
const teste100000 = testeTotal.slice(0, 10000) // Subvetor com 100000 registros

vetorTeste = testeTotal // Subvetor a ser testado

// Cálculo do tempo de processamento
console.time('Tempo de processamento')

// Ordenação por 'date', 'state' e 'city':
bubbleSort(vetorTeste, (a, b) => {
    if(a.date == b.date) {
        if(a.state == b.state) {
            if(a.city > b.city) return true
        }
        else if(a.state > b.state) return true
        else return false
    }
    else if(a.date > b.date) return true
    else return false
})

console.log(vetorTeste)
console.timeEnd('Tempo de processamento')

// Consumo de memória
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB):', memoria)

