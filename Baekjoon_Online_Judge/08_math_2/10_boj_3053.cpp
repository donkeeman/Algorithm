#include <iostream>

#define PI 3.1415926535897932

int main(){
    int r;
    scanf("%d", &r);
    // 유클리드 기하학에서의 원의 넓이는 𝝿r^2
    printf("%.6f\n", r*r*PI);
    // 택시 기하학에서의 원은 대각선의 길이가 2r인 정사각형(마름모) 모양이므로 넓이는 2r^2
    printf("%.6f\n", r*r*2.0);
}