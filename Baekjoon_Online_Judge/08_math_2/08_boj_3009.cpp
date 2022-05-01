#include <iostream>

int find(int arr[3]){
	if(arr[0] == arr[1])
		return arr[2];
	else if(arr[1] == arr[2])
		return arr[0];
	else
		return arr[1];
}

int main() {
	int x, y;
    int xArr[3], yArr[3];
	for(int i = 0; i<3; i++){
		scanf("%d %d", &x, &y);
		xArr[i] = x;
		yArr[i] = y;
	}
	printf("%d %d", find(xArr), find(yArr));
	return 0;
}