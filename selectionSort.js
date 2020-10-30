function selectionSort(vetor, fnComp) {

    // Encontrar o menor valor em um subvetor
    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            if(! fnComp(vetor[i], vetor[posMenor]))
            posMenor = i
        }
        return posMenor
    }

    for(i = 0; i < vetor.length - 1; i++) {
        posMenor = encontrarMenor(vetor, i + 1)

        // Troca de valores por desestruturação do vetor
        if(fnComp(vetor[i], vetor[posMenor])) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
        }
    }
}

// Importação e divisão dos dados
const testeTotal = require('./dados/covid-19.js')
const teste1000 = testeTotal.slice(0, 999) // Subvetor com 1000 registros
const teste25000 = testeTotal.slice(0, 24999) // Subvetor com 25000 registros
const teste100000 = testeTotal.slice(0, 99999) // Subvetor com 100000 registros

vetorTeste = testeTotal // Subvetor a ser testado

// Cálculo do tempo de processamento
console.time('Tempo de processamento')

// Ordenação por 'date', 'state' e 'city':
selectionSort(vetorTeste, (a, b) => {
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