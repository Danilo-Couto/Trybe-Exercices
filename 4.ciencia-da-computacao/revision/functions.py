def greeting(name,age=28):
    print("Hello " + name + ", you are " + str(age) + "!")
    print(f"Hello {name}, you are {age}!")

name = input("Enter your name: ")    
greeting(name,32)
greeting("Judith")


# Functions - Named Notation
def greeting(name, age=28, color="red"):  
   print(f"Hello {name.capitalize()}, you will be {age+1} next birthday!")
   print(f"We hear you like the color {color.lower()}!")

greeting(27, "brian","Blue")
# Error: Unknown error

greeting(age=27, name="brian",color="Blue")
# Hello Brian, you will be 28 next birthday!
# ›We hear you like the color blue!


# Return statements
def value_added_tax(amount):
    tax = amount * 0.25
    
print(value_added_tax(100))
# None

def value_added_tax(amount):
    tax = amount * 0.25
    return tax
    
print(value_added_tax(100))
# 25.0