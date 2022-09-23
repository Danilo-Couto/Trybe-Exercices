import random

MAX_ATTEMPTS = 3


def retrieve_words(file):
    print(file)
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print("You win")
    else:
        print("You lose")


if __name__ == "__main__": # script para mandar executar apenas quando a execução é no proprio arquivo
    with open("words.txt") as file: #  declarado assim é modo de leitura, não cria o arquivo se não existe (é preciso cria-lo antes)
        words = retrieve_words(file)
    secret_word, scrambled_word = draw_secret_word(words)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)