#Calculate and print the factorial of a given integer.

def extraLongFactorials(n):
    fact = 1
    for i in range(n, 1, -1):
        fact = fact * i
    
    print(fact)

extraLongFactorials(5) #120