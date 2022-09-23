class Geladeira:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0

#---ABSTRAÇÃO: por não haver a necessidade de conhecer o cálculo interno
    # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


geladeira = Geladeira("Azul", "110", "127", 200)

# # print(f"A cor atual é {Geladeira.__cor}")
# # AttributeError: 'Geladeira' object has no attribute '__cor'

# print(f"A cor atual é {geladeira.cor}")
# geladeira.cor = "Vermelho"
# print(f"Após pintarmos, a nova cor é {geladeira.cor}")


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.geladeira = None

    def __str__(self):
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."

#---COMPOSIÇÃO:  atribuir o objeto de uma classe a outra, gerando assim um relacionamento de pertencimento entre eles
    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
           self.saldo_na_conta -= geladeira.preco
           self.geladeira = geladeira 
           

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_geladeira(geladeira)

print(pessoa_cozinheira)
