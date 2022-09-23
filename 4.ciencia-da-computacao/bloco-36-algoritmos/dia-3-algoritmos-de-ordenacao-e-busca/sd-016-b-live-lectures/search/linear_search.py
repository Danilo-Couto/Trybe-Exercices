def search(array: list[int], value: int) -> int:
    for index, element in enumerate(array):
        if element == value:
            return index
    return -1


if __name__ == "__main__":
    print(search([1, 2, 3], 2))  # saída: 1
    print(search([1, 2, 3], 4))  # saída: -1
