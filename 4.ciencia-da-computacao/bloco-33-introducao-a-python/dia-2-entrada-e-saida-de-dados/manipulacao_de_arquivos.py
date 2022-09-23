example = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

example.write("nome idade\n")
example.write("Maria 45\n")
example.write("Miguel 33\n")

print("Túlio 22", file=example)

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
example.writelines(LINES)

example.close()
