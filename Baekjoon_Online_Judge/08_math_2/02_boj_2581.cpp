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
	int n1, n2, pnMin = 0, pnSum = 0;
	scanf("%d\n%d", &n1, &n2);
    for(int i = n1; i<n2+1; i++){
	    if(isPrime(i)){
            // printf("%d ", i);
		    pnSum += i;
            if(pnMin == 0)
                pnMin = i;
        }
    }
	pnSum == 0 ? printf("-1") : printf("%d\n%d", pnSum, pnMin);
	return 0;
}