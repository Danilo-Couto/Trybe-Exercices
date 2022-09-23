def show_with_all(numbers_list):
    for x in numbers_list:
        for y in numbers_list:
            print(x, y)


if __name__ == "__main__":
    my_list = [2, 5, 8]
    show_with_all(my_list)
