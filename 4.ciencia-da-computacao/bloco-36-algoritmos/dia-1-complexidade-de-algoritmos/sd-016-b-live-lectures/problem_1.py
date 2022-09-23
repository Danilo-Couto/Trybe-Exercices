def more_than_twenty_five_percent(array: list) -> int:
    twenty_five_percent = len(array) // 4
    seventy_five_percent = len(array) - twenty_five_percent
    for index, element in enumerate(array[:seventy_five_percent]):
        if element == array[index + twenty_five_percent]:
            return element
    return -1


if __name__ == "__main__":
    test1 = [1, 2, 2, 6, 6, 6, 6, 7, 10]  # 6
    test2 = [1, 1, 2, 3]  # 1
    test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # -1
    print(more_than_twenty_five_percent(test1))
