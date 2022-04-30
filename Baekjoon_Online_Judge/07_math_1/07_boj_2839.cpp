#include <iostream>

int main() {
	int n, min;
	scanf("%d", &n);
	min = n;
	// 5x+3y = n
	for(int i = 0; i<n/5+1; i++){
		int r = n-(5*i);
		if(r%3 == 0 and min > i+r/3)
			min = i+r/3;
	}
	if(min == n)
		min = -1;
	printf("%d", min);
	return 0;
}