#include <iostream>

int sumOfDigits(int n){
	// n의 각 자리수의 합을 반환
	int sum = 0;
	while(n != 0){
		sum += n%10;
		n /= 10;
	}
	return sum;
}

bool isSelfNum(int n){
	// 숫자 하나를 받아서, 그 숫자가 self number인지 검사
	// 1~자기 자신까지 루프 안에서 수+자릿수의 합의 결과가 자신과 같은 게 하나도 없다면 self number
	for(int i = 1; i<=n; i++){
		if(i + sumOfDigits(i) == n){
			return false;
		}
	}
	return true;
}

int main(){
	for(int i = 1; i<=10000; i++){
		if(isSelfNum(i))
			printf("%d\n", i);
	}
}