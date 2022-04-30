#include <iostream>
#include <cmath>

using namespace std;

int main() {
	long a, b, v;
	scanf("%ld %ld %ld", &a, &b, &v);
	// a + (a-b) * n >= v -> n >= (v-a)/(a-b)
	// n은 정수이므로 결과값을 올림해주고, 처음에 a를 더해주었으므로 1일 추가
	printf("%d", int(ceil((double)(v-a)/(a-b)))+1);
	return 0;
}