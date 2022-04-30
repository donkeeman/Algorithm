import sys

t = int(sys.stdin.readline().rstrip("\n"))

for i in range(t):
	a, b = map(int, sys.stdin.readline().rstrip("\n").split())
	print(a+b)
