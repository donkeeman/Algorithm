#include <iostream>
#include <cmath>

bool isPrime(int n){
	if(n == 1)
		return false;
	if(n == 2){
		return true;
	}
	for(int i = 2; i<(int)sqrt(n)+1; i++){
		if(n%i == 0)
			return false;
	}
	return true;
}

int main() {
	int count, n, pn = 0;
	scanf("%d", &count);
	for(int i = 0; i<count; i++){
		scanf("%d", &n);
		if(isPrime(n))
			// printf("%d ", n);
			pn++;
	}
	printf("%d", pn);
	return 0;
}