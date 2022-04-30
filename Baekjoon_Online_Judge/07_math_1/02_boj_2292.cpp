#include <iostream>

int main(){
	int x;
	scanf("%d", &x);
	if(x == 1){
		printf("%d", 1);
		return 0;
	}
	int i = 1, n = 1;
	while(true){
		if(x >= n+1 and x <= n+6*i){
			printf("%d", i+1);
			break;
		}
		n += 6*i;
		i++;
	}
}