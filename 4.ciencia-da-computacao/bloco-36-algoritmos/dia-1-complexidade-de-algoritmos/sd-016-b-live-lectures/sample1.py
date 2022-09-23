import time


def list_sum(numbers_list):
    sum = 0
    for number in numbers_list:
        sum += number

    return sum


if __name__ == "__main__":
    # 10.000 mil números
    ten_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 1_000
    # 100.000 cem mil números
    hundred_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 10_000
    # 1.000.000 um milhão números
    one_million = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 100_000

    start_time = time.time()
    list_sum(ten_thousand)
    print(f"Dez mil: {(time.time() - start_time)} segundos")

    start_time = time.time()
    list_sum(hundred_thousand)
    print(f"Cem mil: {(time.time() - start_time)} segundos")

    start_time = time.time()
    list_sum(one_million)
    print(f"1 milhão: {(time.time() - start_time)} segundos")
