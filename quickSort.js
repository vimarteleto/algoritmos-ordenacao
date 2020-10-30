function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    // Garante que exista ao menos dois elementos na ordenação
    if(fim > inicio) {
        let posDiv = inicio - 1
        for(let i = inicio; i < fim; i++) {
            
            // Troca de valores por desestruturação do vetor
            if(fnComp(vetor[fim], vetor[i])) {
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[fim]] = [vetor[fim], vetor[posDiv]]
        quickSort(vetor, fnComp, inicio, posDiv - 1)    // Lado esquerdo
        quickSort(vetor, fnComp, posDiv + 1, fim)       // Lado direito
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
quickSort(vetorTeste, (a, b) => {
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