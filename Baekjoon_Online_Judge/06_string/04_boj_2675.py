count = int(input())

for i in range(count):
    n, s = input().split()
    newStr = ""
    for c in s:
        newStr += c*int(n)
    print(newStr)