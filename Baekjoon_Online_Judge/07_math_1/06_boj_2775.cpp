#include <iostream>

int f(int k, int n){
	if(n == 1)
		return 1;
	else if(k == 0)
		return n;
	else
		return f(k-1, n)+f(k, n-1);
}

int main() {
	int count, k, n;
	scanf("%d", &count);
	for(int i = 0; i<count; i++){
		scanf("%d\n%d", &k, &n);
		printf("%d\n", f(k, n));
	}
	return 0;
}