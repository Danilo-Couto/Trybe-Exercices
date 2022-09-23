# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
a = 10
b = 5
a + b
a - b
a * b
a / b
a // b
a ** b
a % b

# Exercício 2: Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
hours = 6
minutes = hours * 60
seconds = minutes * 60

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.
# Exercício 4: Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.
books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic

# Copie a lista abaixo para realizarmos os # exercícios de fixação 5 e 6:

trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
trybe_course.append("Ciência da Computação")

# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course[0] = "Fundamentos"

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set(). Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

var = set()
var.add("Lauro Cesar")
var

# Utilizando o código abaixo, faça os # exercícios de fixação 8, 9 e 10:

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info["recorrente"] = "Sim"

# Exercício 9: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.

del info["origem"]
# Exercício 10: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29. Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.
# A estrutura recomendada é a tuple. Caso houvesse necessidade de editar os valores ou adicionar mais valores, usaríamos uma list.
# Exercício 11: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual estrutura mais recomendada para armazenamento desta contagem?

# dict é a estrutura mais adequada, pois conseguimos armazenar o elemento da lista como chave e a quantidade de vezes que ele aparece como valor da chave.

my_list = [20, 20, 1, 2]
count_elements = {
    20: 2,
    1: 1,
    2: 2
}

# Exercício 12: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.

number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

# Note que usamos counter += 1 pra incrementar o contador -- não existe counter++. Da mesma forma, poderíamos ter atualizado o resultado com a expressão result *= counter.
# Uma versão mais pythonica dessa solução usaria range:

number = 5
result = 1

# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
result

# Exercício 13: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10]. Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100].

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

# Embora essa solução seja perfeita, é muito mais comum ver Pythonistas escrevendo compreensões de lista:

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings
# Exercício 14: Percorra a lista do # exercício 13 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0: # se o resto é zero, é divisível
        print(f'{rating} é múltiplo de 3')
    rating*=10
    new_ratings.append(rating)
print(new_ratings)

# 12: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.

number = 5
counter = 1
result = 1

while counter <= number:
    result *= counter
    counter += 1
print(result)

# ou usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
print(result)

#Exercício 13: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10]. Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100].

ratings = [6, 8, 5, 9, 10]
new_ratings = []
""" for rating in ratings:
    rating*=10
    new_ratings.append(rating)
print(new_ratings) """

# ou
new_ratings = [rating*10 for rating in ratings]
print(new_ratings)

# Exercício 14: Percorra a lista do exercício 13 e imprima "Múltiplo de 3" se o elemento for divisível por 3.
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if (rating % 3) == 0:
        print(f'{rating} é múltiplo de 3')