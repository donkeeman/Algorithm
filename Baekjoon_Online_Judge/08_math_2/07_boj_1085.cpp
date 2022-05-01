#include <iostream>
#include <algorithm>

int main() {
	int x, y, w, h;
	scanf("%d %d %d %d", &x, &y, &w, &h);
	int distance[4] = { x, y, w - x, h - y };
	printf("%d", *std::min_element(distance, distance + 4));
	return 0;
}