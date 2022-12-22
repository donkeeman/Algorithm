#include <iostream>
#include <cmath>

int intersection(int x1, int y1, int r1, int x2, int y2, int r2){
	// 두 원이 일치하는 경우 교점 무한개
	if(x1 == x2 and y1 == y2 and r1 == r2)
    	return -1;
    // 두 원의 중심이 같고 반지름이 다른 경우 교점 0개
    if (x1 == x2 and y1 == y2 and r1 != r2)
    	return 0;
    double distance = sqrt(pow(abs(x2-x1), 2) + pow(abs(y2-y1), 2));
    // 한 원이 나머지 한 원에 포함되는 경우 교점 0개
    if(distance < abs(r1-r2))
    	return 0;
    // 두 원 사이의 거리 > 반지름 합인 경우 교점 0개 
    if(distance > r1+r2)
    	return 0;
    // 두 원이 안에서 접하는 경우 교점 1개
    if(distance == abs(r1-r2))
    	return 1;
    // 두 원이 밖에서 접하는 경우 교점 1개
    if(distance == r1+r2)
    	return 1;
    // 두 원 사이의 거리 < 반지름 합이면서 한 원이 다른 원에 포함이 아닌 경우 교점 2개
    if(distance < r1+r2 and distance > abs(r1-r2))
    	return 2;
}

int main(){
    int x1, y1, r1, x2, y2, r2, n;
    scanf("%d", &n);
    for(int i = 0; i<n; i++){
    	scanf("%d %d %d %d %d %d", &x1, &y1, &r1, &x2, &y2, &r2);
    	printf("%d\n", intersection(x1, y1, r1, x2, y2, r2));
    }
}