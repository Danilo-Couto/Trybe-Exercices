""""
Iremos aprimorar a estrutura da nossa classe LinkedList para otimizar 
a operação de inserção (no final). Como essa operação possui, 
até o momento, a complexidade O(n), nosso objetivo é torná-la O(1). 
Para isso, nós criaremos uma nova classe, chamada LinkedListGuardian 
para fazermos a refatoração.
"""

from linked_list_guard import LinkedListGuard


if __name__ == "__main__":
    my_linked_list = LinkedListGuard()

    my_linked_list.insert_first('Felps')
    my_linked_list.insert_last('Eli')
    my_linked_list.insert_last('Flavio')
    my_linked_list.insert_last('Bux')

    print(my_linked_list)
    print(my_linked_list.head)
    print(my_linked_list.tail)
