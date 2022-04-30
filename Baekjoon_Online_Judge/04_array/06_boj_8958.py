size = int(input())
for i in range(size):
    sum = n = 0
    s = input()
    for c in s:
        if c == 'O':
            n += 1
            sum += n
        else:
            n = 0
    print(sum)