#include <iostream>

using namespace std;

int main() {
	int n, sum;
	scanf("%d", &n);
	int i = 1;
	while(true){
		sum = 0;
	    if(i > n)
	        break;
		int j = i;
		while(j != 0) {
			sum += j%10;
			j /= 10;
		}
		if(sum + i == n)
			break;
		i++;
	}
	if(sum == 0)
		printf("0");
	else
		printf("%d", n - sum);
}