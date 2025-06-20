# Move zero to the end of the list
i = [2,1,0,4,5]
for item in i:
    if item == 0:
        i.remove(item)
        i.append(item)
print(i)
    