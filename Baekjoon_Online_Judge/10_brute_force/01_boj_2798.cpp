#include <iostream>

int main() {
	int n, sum, maxSum = 0;
	scanf("%d %d", &n, &sum);
	int numArr[n] = {0};
	for(int i = 0; i<n; i++){
		scanf("%d", &numArr[i]);
	}
	for(int i = 0; i<n-2; i++){
		for(int j = i+1; j<n; j++){
			for(int k = j+1; k<n; k++){
				if(numArr[i]+numArr[j]+numArr[k] >= maxSum and numArr[i]+numArr[j]+numArr[k] <= sum)
					maxSum = numArr[i]+numArr[j]+numArr[k];
			}
		}
	}
	printf("%d", maxSum);
}