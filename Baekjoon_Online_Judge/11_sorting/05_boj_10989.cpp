#include <iostream>

int main() {
	int n;
	int count[10001] = {0, };
	scanf("%d", &n);
	for(int i = 0; i<n; i++){
		int a;
		scanf("%d", &a);
		count[a]++;
	}
	for(int i = 0; i<10001; i++){
		if(!count[i]){
			continue;
		}
		for(int j = 0; j<count[i]; j++){
			printf("%d\n", i);
		}
	}
}