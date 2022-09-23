friends = ['John','Michael','Terry','Eric','Graham']
cars = [911,130,328,535,740,308]

# print(friends)
# print(friends[2:4])
# print(friends[:])
# print(friends[1],friends[4])
# print(len(friends))
# print(friends.count('Eric'))

# print(sum(cars))
# print(min(cars))
# print(max(cars))
# print(avg(cars))

friends.sort(reverse=True)
friends.reverse()

friends.append('Ariel') # goes in the end
friends.insert(1, 'Ariel') # goes in the index 1
friends[2]= 'Ariel' # replace the index 2

friends.extend(cars) # concat list
friends.remove('Michael')
friends.pop() # remove the last
friends.pop(2) # remove the index 2
friends.clear() # show empty list
# del friends # no existing list
# del friends[2]

# copy friends list
new_friends = friends[:]
new_friends = friends.copy()
new_friends = list(friends)

print(friends)

