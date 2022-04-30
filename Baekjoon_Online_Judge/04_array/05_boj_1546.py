sum = 0.0
size = int(input())
score = list(map(int,input().split()))
for item in score:
	sum += item/max(score)*100
print(sum/size)