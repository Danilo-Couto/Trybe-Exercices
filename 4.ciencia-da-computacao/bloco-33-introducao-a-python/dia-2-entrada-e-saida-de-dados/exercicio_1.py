# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. 

""" def vertical_inverted_ladder(name):
    for letter in name:
        print(name)
        name = name.rstrip(name[-1])

if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name) """

# gabarito
def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()

if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)