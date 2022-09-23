# Exercício 1 - Facebook
# Você receberá uma lista de palavras e uma string. Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.

# Exemplo 1:
words1 = ["cat", "bt", "hat", "tree"]
chars1 = "atach"

# saída: 6
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "cat" (tamanho 3) e "hat" (tamanho 3)."""

# Exemplo 2:
words2 = ["hello", "world", "students"]
chars2 = "welldonehoneyr"


def pick_words(words, chars):
    dict = {}
    for word in words:
        is_there = False

        for index in range(len(word)):
            if word[index] in chars:
                is_there = True
            else:
                is_there = False
                break
        if is_there:
            dict[word] = len(word)

    sum = 0
    for value in dict.values():
        sum += value

    return sum

print(pick_words(words1, chars1))
print(pick_words(words2, chars2))
