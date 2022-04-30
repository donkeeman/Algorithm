#include <iostream>
#include <algorithm>

using namespace std;

int main(){
    int n;
    scanf("%d", &n);
    int numArr[n] = {0};
    for(int i = 0; i<n; i++){
        scanf("%d", &numArr[i]);
    }
    printf("%d %d", (*min_element(numArr, numArr+n)),(*max_element(numArr, numArr+n)));
}