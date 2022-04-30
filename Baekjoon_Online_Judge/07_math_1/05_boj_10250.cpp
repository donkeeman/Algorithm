#include <iostream>

int main() {
	int count, h, w, n;
	scanf("%d", &count);
	for(int i = 0; i<count; i++){
		scanf("%d %d %d", &h, &w, &n);
		int y = n%h == 0 ? h : n%h; // 층수
		int x = n%h == 0 ? n/h : n/h+1; // 엘베까지의 거리
		x < 10 ? printf("%d0%d\n", y, x) : printf("%d%d\n", y, x);
	}
	return 0;
}