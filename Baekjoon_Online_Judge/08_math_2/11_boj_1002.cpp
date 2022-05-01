#include <iostream>
#include <cmath>

int intersection(int x1, int y1, int r1, int x2, int y2, int r2) {
    // �� ���� ��ġ�ϴ� ��� ���� ���Ѱ�
    if (x1 == x2 and y1 == y2 and r1 == r2)
        return -1;
    // �� ���� �߽��� ���� �������� �ٸ� ��� ���� 0��
    if (x1 == x2 and y1 == y2 and r1 != r2)
        return 0;
    double distance = sqrt(pow(abs(x2 - x1), 2) + pow(abs(y2 - y1), 2));
    // �� ���� ������ �� ���� ���ԵǴ� ��� ���� 0��
    if (distance < abs(r1 - r2))
        return 0;
    // �� �� ������ �Ÿ� > ������ ���� ��� ���� 0�� 
    if (distance > r1 + r2)
        return 0;
    // �� ���� �ȿ��� ���ϴ� ��� ���� 1��
    if (distance == abs(r1 - r2))
        return 1;
    // �� ���� �ۿ��� ���ϴ� ��� ���� 1��
    if (distance == r1 + r2)
        return 1;
    // �� �� ������ �Ÿ� < ������ ���̸鼭 �� ���� �ٸ� ���� ������ �ƴ� ��� ���� 2��
    if (distance < r1 + r2 and distance > abs(r1 - r2))
        return 2;
}

int main() {
    int x1, y1, r1, x2, y2, r2, n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d %d %d %d %d %d", &x1, &y1, &r1, &x2, &y2, &r2);
        printf("%d\n", intersection(x1, y1, r1, x2, y2, r2));
    }
}