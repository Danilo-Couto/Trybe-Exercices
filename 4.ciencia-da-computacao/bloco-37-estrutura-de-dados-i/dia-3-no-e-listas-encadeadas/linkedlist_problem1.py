""""
Dada uma lista não vazia, unida individualmente
com o nó principal, retorne o node do meio da lista.
"""

from linked_list import LinkedList

if __name__ == "__main__":
    my_linked_list = LinkedList()

    my_linked_list.insert_first('Felps')
    my_linked_list.insert_first('Eli')
    my_linked_list.insert_first('Flavio')
    my_linked_list.insert_first('Bux')
    my_linked_list.insert_first('Will')

    # print(my_linked_list.get_mid_element())
    # print(my_linked_list.clear())
    print(my_linked_list.get_element_at(4))
    print(my_linked_list.get_node_at(4))