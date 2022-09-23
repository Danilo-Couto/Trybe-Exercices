def can_make_arithmetic_progression(nums: list[int]) -> bool:
    nums.sort()

    common_difference = nums[1] - nums[0]
    for index in range(1, len(nums)):
        if nums[index] - nums[index - 1] != common_difference:
            return False
    return True


if __name__ == "__main__":
    list_1 = [1, 3, 5]  # saída: True
    list_2 = [3, 6, 1]  # saída: False
    list_3 = [7, 43, 19, 25, 1, 31, 37, 13]  # saída: False
    list_4 = [7, 43, 19, 25, 1, 32, 37, 13]  # saída: True
    list_5 = [1, 2]  # saída:
    print(can_make_arithmetic_progression(list_1))
