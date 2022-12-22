#include <iostream>
#include <algorithm>

bool isRightTriangle(int n1, int n2, int n3){
	int sides[3] = {n1, n2, n3};
	std::sort(sides, sides+3);
	return sides[2]*sides[2] == sides[1]*sides[1] + sides[0]*sides[0] ? true: false;
}

int main() {
	int x, y, z;
	while(true){
		scanf("%d %d %d", &x, &y, &z);
		if(x == 0)
			break;
		isRightTriangle(x, y, z) ? printf("right\n") : printf("wrong\n");
	}
}