#include <iostream>
int main() {
    int n, answer, count;
    scanf("%d", &n);
    answer = n;
    count = 0;
    while (true) {
        answer = answer % 10 * 10 + (answer % 10 + answer / 10) % 10;
        count++;
        if (n == answer)
            break;
    }
    printf("%d\n", count);
}
