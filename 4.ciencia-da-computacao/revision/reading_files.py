my_file = open('greeting.txt','r') # w, a for write or a for apending
print(my_file.read())#  Hello, Welcome to Monty Pythons Flying Circus!
print(my_file.read(10))#  Hello, Wel
print(my_file.readline())#  Hello,
print(my_file.readline())#  Welcome to Monty Pythons Flying Circus!

line_by_line = my_file.readlines()
line_by_line1 = my_file.read().splitlines()
print('readlines: ',line_by_line)#  readlines: ['Hello,', 'Welcome to Monty Pythons Flying Circus!']
print('splitlines: ',line_by_line1)#  splitlines: ['Hello,', 'Welcome to Monty Pythons Flying Circus!']

my_file.close() # dont forget it


# CONTEXT MANAGER, much easier

with open('friends.csv','r') as f:
    print(f.read())
# John, 1939 Eric, 1943 Michael, 1943 Graham, 1941 TerryG, 1940 TerryJ, 1942

    friends = f.read().splitlines()
    print(friends)
# ['John, 1939', 'Eric, 1943', 'Michael, 1943', 'Graham, 1941', 'TerryG, 1940', 'TerryJ, 1942']

    for friend in friends:
        friend = friend.split(',')
        name = friend[0]
        year = int(friend[1].strip())
        print(f'In 2030 {name} will be {2030 -year} years old')
# In 2030 John will be 91 years old
# In 2030 Eric will be 87 years old
# In 2030 Michael will be 87 years old
# In 2030 Graham will be 89 years old
# In 2030 TerryG will be 90 years old
# In 2030 TerryJ will be 88 years old


with open('movies.txt','r') as f:
    for line in f:
        print(line)