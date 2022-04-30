#include <iostream>

int main(){
    int n;
    scanf("%d", &n);
    n%4 != 0?printf("0"):n%400 == 0 or n%100 != 0?printf("1"):printf("0");
}