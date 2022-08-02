# Estruturas de repetição 2

# while

# A Sequência de Fibonacci, muito presente em diversas formas na natureza, é uma sequência numérica começando por 0 e 1 e cada termo subsequente corresponde à soma dos dois anteriores.
    # Podemos escrever esta sequência da seguinte maneira:

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# O laço de repetição while acontecerá enquanto a condição for satisfeita

# enumerate
    #Em Python, um loop for geralmente é escrito como um loop sobre um objeto iterável. Isso significa que você não precisa de uma variável de contagem para acessar itens no iterável.
    
    # Porém, às vezes, pode acontecer de você querer uma variável que muda em cada iteração do loop. Em vez de criar e incrementar uma variável você mesmo, você pode usar enumerate() do Python para obter um contador e o valor do iterável ao mesmo tempo!

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# Você também pode desestruturar (unpack) os itens da lista ou tupla:
languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
# Saída:
0 - Python
1 - Java

