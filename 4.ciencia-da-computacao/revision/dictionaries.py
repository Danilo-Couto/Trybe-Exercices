movie = {
    'title': 'Life of Brian',
    'year': 1979,
    'cast': ['John','Eric','Michael','George','Terry']
}

# print(movie)

# print(movie['title'])

# print(movie['budget']) # Error: Unknown error
# print(movie.get('budget')) # None
# print(movie.get('budget', 'not found')) # not found

# movie['title'] = 'The Holy Grail'
# movie['budget'] = 250000

# movie.update({'title': 'The Holy Grail','year': 1975, 'cast': ['John','Eric','Michael','George','Terry']})

# del movie['year']
# year = movie.pop('year')

# print(len(movie))

# print(movie.keys())
# print(movie.items())

for key in movie:
    print(key)
# title
# year
# cast

for key, value in movie.items:
    print(key, value)
# title Life of Brian
# year 1979
# cast ['John', 'Eric', 'Michael', 'George', 'Terry']
