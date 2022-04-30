#include <iostream>

int main(){
    int a, b;
    while(true){
        scanf("%d %d", &a, &b);
        if(a == 0 or b == 0)
            break;
        printf("%d\n", a+b);
    }
}