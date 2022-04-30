size = int(input())

for i in range(size):
    scores = list(map(int, input().split()))
    n = scores[0]
    del(scores[0])
    average = sum(scores)/n
    overAvg = list(filter(lambda x:x>average, scores))
    print("{:.3f}%".format(len(overAvg)/n*100))