dice = [int(x) for x in input().split()]

if dice[0] == dice[1] == dice[2]:
    money = 10000+dice[0]*1000
elif dice[0] != dice[1] != dice[2] and dice[0] != dice[2]:
    money = 100*max(dice)
elif dice[0] == dice[2] != dice[1] or dice[0] == dice[1] != dice[2]:
    money = 1000+dice[0]*100
else:
    money = 1000+dice[1]*100
print(money)