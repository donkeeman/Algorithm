n = int(input())
if n%4 != 0:
    print("0")
elif n%400 == 0 or n%100 != 0:
    print("1")
else:
    print("0")