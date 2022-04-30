#include <iostream>

int main(){
    int num[10] = {0,};
    int a, b, c;
    scanf("%d\n%d\n%d", &a, &b, &c);
    long n = a*b*c;
    while(true){
        if(n == 0)
            break;
        num[n%10] += 1;
        n /= 10;
    }
    for(int i = 0; i<10; i++)
        printf("%d\n", num[i]);
}