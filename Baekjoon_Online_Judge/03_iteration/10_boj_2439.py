n = int(input())
for i in range(n):
    for j in range(n):
        print("*", end="") if j>=n-i-1 else print(" ", end="")
    print()