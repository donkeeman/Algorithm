#include <iostream>

int main(){
    int n;
    scanf("%d", &n);
    switch(n/10){
        case 9:
        case 10:
            printf("A");
            break;
        case 8:
            printf("B");
            break;
        case 7:
            printf("C");
            break;
        case 6:
            printf("D");
            break;
        default:
            printf("F");
            break;
    }
}