n = int(input())
s = (1+n)*int(n/2)
if n%2 == 1:
    s += int(n/2)+1
print(s)