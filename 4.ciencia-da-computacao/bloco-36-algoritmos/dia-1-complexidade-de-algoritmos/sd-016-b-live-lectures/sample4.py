if __name__ == "__main__":

    N = 1000
    number_of_operations = 0
    print("Redução logarítmica de N: ", end="")
    i = N
    while i > 1:
        print(i, end=" ")
        number_of_operations += 1
        i = i // 2

    print(
        "\nTempo de execução do algoritmo para reduzir N para 1:",
        number_of_operations,
    )
