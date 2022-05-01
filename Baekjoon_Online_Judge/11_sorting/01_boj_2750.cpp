#include <iostream>

int main() {
	int n;
	scanf("%d", &n);
	int arr[n];
    //printf("%d", arr.size());
	for(int i = 0; i<n; i++)
		scanf("%d\n", &arr[i]);
	for(int i = 0; i<n-1; i++){
		for(int j = i; j<n; j++){
			if(arr[i] > arr[j]){
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	for(int i : arr)
		printf("%d ", i);
}