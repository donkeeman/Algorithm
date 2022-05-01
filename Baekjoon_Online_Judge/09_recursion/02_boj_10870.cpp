#include <iostream>

int fibonacci(int n){
    return n==0?0:n==1?1:fibonacci(n-1)+fibonacci(n-2);
}

int main(){
    int n;
    scanf("%d", &n);
    printf("%d", fibonacci(n));
}