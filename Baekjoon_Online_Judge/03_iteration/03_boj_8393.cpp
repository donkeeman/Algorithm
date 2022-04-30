#include <iostream>

int main(){
    int n, s;
    scanf("%d", &n);
    s = (1 + n) * (n/2);
    if(n%2)
        s += n/2+1;
    printf("%d", s);
}