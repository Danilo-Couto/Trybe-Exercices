#Sets - blazingly fast unordered Lists with UNIQUE values
friends = ['John','Michael','Terry','Eric','Graham']
friends_tuple = ('John','Michael','Terry','Eric','Graham')
friends_set = {'John','Michael','Terry','Eric','Graham','Eric'}
my_friends_set = {'Reg','Loretta','Colin','Eric','Graham'}

print(friends_set.intersection(my_friends_set))
print(friends_set & my_friends_set)
# {'Eric', 'Graham'}

print(friends_set.difference(my_friends_set))
print(my_friends_set - friends_set)
# {'John', 'Michael', 'Terry'}

# Show only the names who only appear in one of the lists
print(friends_set.symmetric_difference(my_friends_set))
print(friends_set ^ my_friends_set)
# {'Reg', 'Colin', 'Michael', 'Terry', 'John', 'Loretta'}

print(friends_set.union(my_friends_set))
print(friends_set | my_friends_set)
# {'John', 'Michael', 'Terry', 'Eric', 'Graham', 'Reg', 'Loretta', 'Colin'}


#empty Lists
empty_list = []
empyt_list = list()

#empty Tuple
empty_tuple = ()
empty_tuple = tuple()

#empty Set
empty_set = {} # this is wrong, this is a dictionary
empty_set = set()

