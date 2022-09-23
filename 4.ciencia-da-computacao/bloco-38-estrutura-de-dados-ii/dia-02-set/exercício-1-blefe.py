# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:

# A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor.
# Exemplo:

# clara = [0, 1, 5, 6, 10]
# nota de partida: 7
# redutor: 1
# pt: 3

# marco = [0, 2, 8, 9, 10]
# nota de partida: 9
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco


# 1 - Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

if __name__ == "__main__":

    entrada = {
        'Clara': [0, 1, 5, 6, 10],
        'Marco': [0, 2, 8, 9, 10]
    }

    def bluffy(entrada):
        the_set = set()

        for index in range(1, 11):
            the_set.add(index)

        for key, value in entrada.items():
            if key == 'Clara':
                player1_choices = the_set - set(value)
            else:
                player2_choices = the_set - set(value)

        pts_player1 = max(player2_choices) - min(player2_choices)
        pts_player2 = max(player1_choices) - min(player1_choices)
        print(entrada.keys()[1])

        if pts_player1 > pts_player2:
            result = 'Clara wins'
        if pts_player1 < pts_player2:
            result = 'Marco wins'
        else:
            result = 'Draw'

        return result

    print(bluffy(entrada))