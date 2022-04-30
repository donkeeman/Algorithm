a, b = map(int, input().split())
c = int(input())
b += c;
while b>=60:
    b -= 60
    a += 1
if a >= 24:
    a -= 24
print(a, b)