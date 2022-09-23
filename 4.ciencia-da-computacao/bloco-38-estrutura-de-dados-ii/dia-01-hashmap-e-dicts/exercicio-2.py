# Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

# Escreva um método que calcule o score de uma determinada pessoa.

# 👀 De olho na dica: para saber o score de uma pessoa, você precisa saber o score das pessoas da equipe dela, correto? Qual estratégia utiliza a mesma função dentro dela própria?

# Exemplo de subordinados:

# - 1 => 2, 3
# - 2 => 4
# - 3 => sem subordinados
# - 4 => 5, 6
# - 5 => 7
# - 6 => sem subordinados
# - 7 => sem subordinados

# Neste exemplo, o score de cada pessoa é:
# - 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7
# - 2 => 4 (score 4) + 1 (score dele próprio) = 5
# - 3 => 1 (score dele próprio)
# - 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4
# - 5 => 1 (score 7) + 1 (score dele próprio) = 2
# - 6 => 1 (score dele próprio)
# - 7 => 1 (score dele próprio)

# ⚠️ Faça a análise de complexidade da sua solução.

# Bônus: É muito comum em entrevistas que, quando a pessoa resolve o problema dentro do tempo, façam-se perguntas "follow-up", que dificultam a questão. Os follow-ups abaixo são opcionais.


import pytest

@pytest.fixture
def input_value():
   input = 39
   return input

def test_divisible_by_3(input_value):
   assert input_value % 3 == 0

def test_divisible_by_6(input_value):
   assert input_value % 6 == 0


print(test_divisible_by_3())