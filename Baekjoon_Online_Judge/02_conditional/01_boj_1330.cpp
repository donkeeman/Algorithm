#include <iostream>

int main(){
    int a, b;
    scanf("%d %d", &a, &b);
    a>b?printf(">"):a<b?printf("<"):printf("==");
}