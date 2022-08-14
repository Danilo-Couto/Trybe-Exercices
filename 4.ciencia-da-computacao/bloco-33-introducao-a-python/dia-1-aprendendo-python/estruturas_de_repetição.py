# Estruturas de repetição
# for

#----
for index in range(5):
    print(index)

##---
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []

min_rating = 3.0

for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)

print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Compreensão de lista (list comprehension)

filtered_restaurants = [restaurant
                        for restaurant in restaurants
                        if restaurant["nota"] > min_rating]

print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# A compreensão de listas também funciona com listas de strings. A seguinte cria uma nova lista de strings que contém 'a'.

nomes = ['Duda', 'Rafa', 'Cris', 'Yuri']
nomes2 = [s for s in nomes if 'a' in s]
print(nomes2)


# Isto é equivalente às operações de map e filter em JavaScript.
quadrados = [x*x for x in range(11)]
print(quadrados)

