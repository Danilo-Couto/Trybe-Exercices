# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
#  O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".

import random

WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]
MAX_ATTEMPTS = 3


def draw_secret_word(words):
    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))
    return word, scrambled_word


def collect_answers():
    answers = []
    for attempt in range(MAX_ATTEMPTS):
        answer = input("qual é a palavra? você tem 3 chances. ")
        answers.append(answer)
    return answers


def check_result(word, answers):
    if word in answers:
        print(f"acertoou: a palavra é {word}")
    else:
        print(f"errooou. a palavra é {word}")


if __name__ == "__main__":
    word, scrambled_word = draw_secret_word(WORDS)
    print(f"Scrambled word is {scrambled_word}")
    answers = collect_answers()
    check_result(word, answers)