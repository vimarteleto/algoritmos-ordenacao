function mergeSort(vetor, fnComp) {

    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length) {

            if(fnComp(vetDir[posDir], vetEsq[posEsq])) {
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else {
                vetRes.push(vetDir[posDir])
                posDir++
            }
        }

        // Sobra no vetor da esquerda
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
        // Sobra no vetor da direita
        else sobra = vetDir.slice(posDir)
        
        // Concatenação ao resultado final
        return vetRes.concat(sobra)
    }
    
    if(vetor.length > 1) {
        // Encontrar o meio do vetor
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio)
        let vetDir = vetor.slice(meio)
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)
        return mesclarVetores(vetEsq, vetDir)        
    }
    return vetor
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
console.log(
    mergeSort(vetorTeste, (a, b) => {
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
)
console.timeEnd('Tempo de processamento')

// Consumo de memória
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB):', memoria)
