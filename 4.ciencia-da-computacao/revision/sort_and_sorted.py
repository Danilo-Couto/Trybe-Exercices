my_list = [1,5,3,7,2]
my_dict = {'car':4,'dog':2,'add':3,'bee':1}
my_tuple = ('d','c','e','a','b')
my_string = 'python'

print(my_list,'original') # [1, 5, 3, 7, 2] original 
print(my_list.sort()) # None
print(my_list,'new') # [1, 2, 3, 5, 7]
#or
print(sorted(my_list)) # [1, 2, 3, 5, 7]


print(my_tuple,'original')
print(sorted(my_tuple))
print(my_tuple,'new')
# ('d', 'c', 'e', 'a', 'b') original
# ['a', 'b', 'c', 'd', 'e'] becomes a list
# ('d', 'c', 'e', 'a', 'b') new, nothing changes (imutable)


print(my_string,'original')
print(sorted(my_string))
print(my_string,'new')
# python original
# ['h', 'n', 'o', 'p', 't', 'y']
# python new


print(my_dict,'original')
print(sorted(my_dict)) #or print(sorted(my_dict.keys()))
print(sorted(my_dict.items()))
print(sorted(my_dict.values()))
print(my_dict,'new')

# {'car': 4, 'dog': 2, 'add': 3, 'bee': 1} original
# ['add', 'bee', 'car', 'dog'] a list only with keys ordered 
# [('add', 3), ('bee', 1), ('car', 4), ('dog', 2)]
# [1, 2, 3, 4]
# {'car': 4, 'dog': 2, 'add': 3, 'bee': 1} new


print(my_list,'original') # [1, 5, 3, 7, 2] original
print(reversed(my_list)) # <reversed object>


print(list(reversed(my_list))) 
#or
print(my_list[::-1])
# [2, 7, 3, 5, 1] just flipped, not reversed


my_list = [1,5,-3,7,-2]

print(sorted(my_list)) #[-3, -2, 1, 5, 7]
print(sorted(my_list, key = abs)) # [1, -2, -3, 5, 7]


my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]

print(sorted(my_llist))
# [['add', 3, 10], ['bee', 1, 24], ['car', 4, 65], ['dog', 2, 30]]

print(sorted(my_llist, key = lambda item :item[0]))
# [['add', 3, 10], ['bee', 1, 24], ['car', 4, 65], ['dog', 2, 30]]

print(sorted(my_llist, key = lambda item :item[2]))
#[['add', 3, 10], ['bee', 1, 24], ['dog', 2, 30], ['car', 4, 65]]

