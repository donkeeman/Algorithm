a, b = map(int, input().split())
b -= 45
if b < 0:
    a -= 1
    b += 60
if a < 0:
    a += 24
print(a, b)