#include <iostream>
#include <cmath>

void factorization(int n){
	int i = 2;
	while(n != 1){
		if(n%i != 0)
			i++;
		else{
			printf("%d\n", i);
			n /= i;
		}
	}
}

int main() {
	int n;
	scanf("%d", &n);
    factorization(n);
	return 0;
}