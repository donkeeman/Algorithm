#include <iostream>

int main(){
    int n, index = 0, max = 0;
    for(int i = 0; i<9; i++){
        scanf("%d", &n);
        if(n>max){
            max = n;
            index = i+1;
        }
    }
    printf("%d\n%d", max, index);
}