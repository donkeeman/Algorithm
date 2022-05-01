#include <iostream>
#include <cmath>

bool isPrime(int n){
	if (n == 2)
		return true;
	if(n % 2 == 0)
		return false;
    for(int i = 3; i<=sqrt(n); i+=2){
		if(n % i == 0)
			return false;
	}
	return true;
}

int main() {
	int count, n;
	scanf("%d", &count);
	for(int i = 0; i<count; i++){
		scanf("%d", &n);
		for(int i = n/2, j = n/2; i>0 or j<n; i--, j++){
			if(isPrime(i) and isPrime(n-i)){
				printf("%d %d\n", i, n-i);
				break;
			}
			else if(isPrime(j) and isPrime(n-j)){
				printf("%d %d\n", n-j, j);
				break;
			}
		}
	}
}