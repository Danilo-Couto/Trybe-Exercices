import time

if __name__ == "__main__":
    b = [value for value in range(0,100000000)]
    c = {value:value for value in range(0,100000000)}

    print('\n')
    start_time = time.time()
    if 99999999 in b:
        print(f"Array: {(time.time() - start_time)} segundos")
    start_time = time.time()
    if 99999999 in c:
        print(f"Dict: {(time.time() - start_time)} segundos")