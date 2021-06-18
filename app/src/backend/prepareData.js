// exportando a função de limpeza e tratamento dos dados provenientes do array de linhas de texto
module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {

            // criando o array de saída de palavras válidas a partir do array de linhas
            const words = rows

                // filtrando somente as linhas válidas
                .filter(filterValidRow)

                // removendo os caracteres de pontuação
                .map(removePunctuation)

                // removendo as tags html
                .map(removeTags)

                // concatenando as linhas em uma única string
                .reduce(mergeRows)

                // criando um array com todas as palavras
                .split(' ')

                // convertendo para minúsculas
                .map(word => word.toLowerCase())

                // removendo as aspas
                .map(word => word.replace('"', ''))

            // retornando o array de saída com as palavras
            resolver(words)
        } catch (e) {

            // retornando o evento de exceção em caso de problema no processamento dos dados
            reject(e)
        }
    })
}

// função auxiliar que verifica a linha de texto, retornando true para as válidas
function filterValidRow(row) {

    // verificando se a linha não é um número
    const notNumber = !parseInt(row.trim())

    // verificando se a linha não está vazia
    const notEmpty = !!row.trim()

    // verificando se a linha não é o intervalo de tempo
    const notInterval = !row.includes('-->')

    // retorna true se a linha for número, vazia ou intervalo de tempo
    return notNumber && notEmpty && notInterval
}

// função auxiliar que remove os caracteres de pontuação ,?!.-
const removePunctuation = row => row.replace(/[,?!.-]/g, '')

// função auxiliar que remove as tags html
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()

// função auxiliar que concatena as linhas em uma única string
const mergeRows = (fullText, row) => `${fullText} ${row}`