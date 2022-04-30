#include <iostream>

using namespace std;

int main() {
	int n, i = 1;
	scanf("%d", &n);
	while (true) {
		if (n > (i * (i - 1)) >> 1 and n <= (i * (i + 1)) >> 1)
			break;
		i++;
	}
	int distance = n - ((i * (i - 1)) >> 1);
	i % 2 ? printf("%d/%d", i + 1 - distance, distance) : printf("%d/%d\n", distance, i + 1 - distance);
	return 0;
}