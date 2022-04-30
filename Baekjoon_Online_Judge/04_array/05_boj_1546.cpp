#include <iostream>
#include <algorithm>

int main(){
    int size, max;
    float sum = 0.0;
    scanf("%d", &size);
    int score[size];
    for(int i = 0; i<size; i++)
        scanf("%d", &score[i]);
    max = *std::max_element(score, score+size);
    for(int i = 0; i<size; i++)
    	sum += (float)score[i]/max*100;
    printf("%f\n", sum/size);
}