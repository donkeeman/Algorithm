#include <iostream>

int main(){
    int n;
    scanf("%d", &n);
    for(int i = 0; i<n; i++){
        for(int j = 0; j<n; j++)
            j>=n-i-1?printf("*"):printf(" ");
        printf("\n");
    }
}