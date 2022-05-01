#include <iostream>

int fact(int n){
    return n<1?1:fact(n-1)*n;
}

int main(){
    int n;
    scanf("%d", &n);
    printf("%d", fact(n));
}