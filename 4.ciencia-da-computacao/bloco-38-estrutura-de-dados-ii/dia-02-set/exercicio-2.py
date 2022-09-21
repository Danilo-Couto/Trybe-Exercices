# Dada uma string, ache o tamanho da maior substring que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: O(n²).

if __name__ == "__main__":

    string = "serdevemuitolegalmasehprecisoestudarbastante"

    def find_sub_string(string):
        biggest_substring = set(string)
        return len(biggest_substring)

    # gabarito
    def longer_no_repeating_substring_len(string):
        biggest = 0
        for index, _ in enumerate(string):
            substr = set()
            for letter in string[index:]:
                if letter in substr:
                    break
                substr.add(letter)
            if len(substr) > biggest:
                biggest = len(substr)
        return biggest


print(find_sub_string(string))
print(longer_no_repeating_substring_len(string))