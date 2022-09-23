# Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def count_even(n):
    count = 0
    for i in range(n):
        if i % 2 == 0 and i != 0:
            count += 1
    return count


# Exercício 2: Transforme o algoritmo criado acima em recursivo.

def count_even_recursive(n):
    if n <= 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_even_recursive(n-1)
    else:
        return count_even_recursive(n-1)


# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
# iterativa (eu fiz)
def higher_int(list):
    last = list[-1]
    higher = last
    for n in list[:len(list)-1]:
        if n > last:
            higher = n
    return higher


# recursiva (vi gabarito)
def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho-1)
        if maior_do_resto_da_lista > lista[tamanho-1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho-1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.
def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


if __name__ == '__main__':
    # print(count_even(4))
    # print(count_even_recursive(4))
    # print(higher_int([312, 1, 0, 4]))
    # print(maiorinteiro(([312, 1, 0, 4])))
    print(mdc(312,12))