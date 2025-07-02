import random
char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?'
lenght = int(input("Enter the length of the password: "))
password = ""

for i in range(lenght):
    password += random.choice(char)

print("Your password is: " + password)
