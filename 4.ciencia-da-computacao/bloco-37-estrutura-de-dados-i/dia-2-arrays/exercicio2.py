# Exercício 3 Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.


def get_combination(produtos):
    comb = []
    for index, produto in enumerate(produtos):
        [comb.append((index, index2)) for index2 in range(index+1, len(produtos))
            if produto == produtos[index2]]

    return len((comb))


# gabarito
# def get_combination(numbers):
#     answer = 0
#     i = 0
#     size = len(numbers)
#     for i in range(size):
#         for j in range(i + 1, size):
#             if numbers[i] == numbers[j]:
#                 answer += 1
#     return answer
    

print(get_combination(produtos))
