#include <iostream>
#include <string>

int ap(int n) {
    int count = 99;
    std::string s;
    // 1000�� �Ѽ� �ƴϹǷ� 100~999���� �˻�
    for (int i = 100; i <= n; i++) {
        s = std::to_string(i);
        if (s[0] - s[1] == s[1] - s[2])
            count++;
    }
    return count;
}

int main() {
    int n;
    scanf("%d", &n);
    // 99������ ���� ������ �Ѽ�
    printf("%d", n >= 100 ? ap(n) : n);
}