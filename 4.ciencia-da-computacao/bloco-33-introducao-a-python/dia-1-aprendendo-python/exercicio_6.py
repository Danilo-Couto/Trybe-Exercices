# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

def paint_costs(area):
    can_price = 80
    liters = area / 3
    cans = liters // 18
    if liters % 18:
        cans += 1
    return cans, cans * can_price