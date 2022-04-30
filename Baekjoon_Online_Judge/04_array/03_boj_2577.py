num = [0] * 10
a = int(input())
b = int(input())
c = int(input())
n = int(a*b*c)

while n != 0:
	num[n%10] += 1
	n = int(n/10)

for item in num:
	print(item)
