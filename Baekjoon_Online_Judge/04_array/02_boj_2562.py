index = max = 0
for i in range(9):
    n = int(input())
    if n>max:
        max = n
        index = i+1
print(max, index, sep="\n")
