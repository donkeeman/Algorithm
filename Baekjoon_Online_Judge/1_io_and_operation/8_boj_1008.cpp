#include <iostream>

int main() {
    double a, b;
    scanf("%lf %lf", &a, &b);
    if (a <= 0 or b >= 10)
        return 1;
    printf("%.9f", a / b);
    return 0;
}