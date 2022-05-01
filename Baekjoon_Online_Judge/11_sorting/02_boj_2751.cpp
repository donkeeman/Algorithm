// merge sort

#include <iostream>

int result[1000000];

void combine(int arr[], int start, int mid, int end){
	int i = start, j = mid+1, k = start;
	while(i <= mid and j <= end){
		if(arr[i] < arr[j])
			result[k++] = arr[i++];
		else
			result[k++] = arr[j++];
	}
	if(i > mid){
		while(j <= end)
			result[k++] = arr[j++];
	}
	else if(j > end){
		while(i <= mid)
			result[k++] = arr[i++];
	}
	for(int n = start; n < end+1; n++)
		arr[n] = result[n];
}

void mergeSort(int arr[], int start, int end){
	if(start < end){
		int mid = (start+end)/2;
		mergeSort(arr, start, mid);
		mergeSort(arr, mid+1, end);
		combine(arr, start, mid, end);
	}
}

int main() {
	int n;
	scanf("%d", &n);
	int arr[n];
	for(int i = 0; i<n; i++)
		scanf("%d", &arr[i]);
	mergeSort(arr, 0, n-1);
	for(int i = 0; i<n; i++){
		printf("%d ", arr[i]);
	}
}