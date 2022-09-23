msg ='Welcome to Python 101: Split and Join'
csv = 'Eric,John,Michael,Terry,Graham'
friends_list = ['Eric','John','Michael','Terry','Graham']

print(list(msg))
# ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'P', 'y', 't', 'h', 'o', 'n', ' ', '1', '0', '1', ':', ' ', 'S', 'p', 'l', 'i', 't', ' ', 'a', 'n', 'd', ' ', 'J', 'o', 'i', 'n']

print(msg.split())
print(msg.split(' '))
# ['Welcome', 'to', 'Python', '101:', 'Split', 'and', 'Join']

print('-'.join(msg))
# W-e-l-c-o-m-e- -t-o- -P-y-t-h-o-n- -1-0-1-:- -S-p-l-i-t- -a-n-d- -J-o-i-n

print('-'.join(friends_list))
# Eric-John-Michael-Terry-Graham

print('-'.join(friends_list + friends_list))
# Eric-John-Michael-Terry-Graham-Eric-John-Michael-Terry-Graham

print(''.join(msg.split()))
print(msg.replace(' ', ''))
# WelcometoPython101:SplitandJoin

