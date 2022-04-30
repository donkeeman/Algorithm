n, x = map(int, input().split())
numArr = list(map(int, input().split()))

for num in numArr:
    if num<x:
        print(num, end=" ")