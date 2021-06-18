// exportando a função de criação e ordenação do array de objetos {name, amount}
module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            // criando o objeto com os atributos {word:qtd}, com as palavras agrupadas e a quantidade de ocorrências
            const groupedWords = words.reduce((obj, word) => {

                // se a chave da palavra já existir no objeto:
                if (obj[word]) {

                    // incrementa a quantidade em um
                    obj[word] += 1
                }
                // senão:
                else {

                    // adiciona um atributo com a chave da palavra
                    obj[word] = 1
                }

                // retorna o objeto para a próxima iteração
                return obj
            }, {})

            // criando um array de objetos {name, amount} a partir do objeto com os atributos {word:qtd}
            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({
                    name: key,
                    amount: groupedWords[key]
                }))

                // ordenando os objetos em ordem decrescente de ocorrências
                .sort((w1, w2) => w2.amount - w1.amount)

            // retornando o array de objetos {name, amount} ordenado
            resolver(groupedWordsArray)
        } catch (e) {
            // retornando o evento de exceção em caso de problema no tratamento dos dados
            reject(e)
        }
    })
}