for letter in 'Norwegian blue':
    print(letter)

for num in range(8):
    print(num)
    
for num in range(2,8):
    print(num)

for num in range(2,8,3):
    print(num)

friends = ['John','Terry','Eric','Michael','George']

for friend in friends:
    print(friend)

for index in range(len(friends)):
   print(friends[index])

for friend in friends:
    if friend == 'Eric':
        print('Found ' + friend + '!')
        continue  # or break if i dont want end the function
    print(friend)

friends = ['John','Terry','Eric']
for friend in friends:
    for number in [1,2,3]:
        print(friend, number)