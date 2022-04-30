#include <iostream>

int main(){
    long long a, b, c;
    scanf("%lld %lld %lld", &a, &b, &c);
    // b >= c이면 손익분기점 x
    // a+b*n > c*n -> a > (c-b)*n -> a/(c-b) > n
    // a/(c-b)보다 큰 정수 중 가장 작은 정수를 구해야 하므로 +1
	b >= c ? printf("%d", -1) : printf("%lld", a/(c-b)+1);
    return 0;
}