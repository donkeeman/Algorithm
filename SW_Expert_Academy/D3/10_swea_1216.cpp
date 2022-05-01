#include <iostream>
#include <vector>

using namespace std;

int main(int argc, char** argv)
{
    int test_case;
    int maxLength; // 회문의 최대 길이를 저장할 변수
    vector<vector<char>> charVector; // 문자 판을 저장할 2차원 벡터

    for (test_case = 1; test_case <= 10; ++test_case)
    {
        charVector.assign(100, vector<char>(100, 0)); // 벡터 초기화
        int left, right; // 좌, 우 인덱스를 저장할 변수
        int currentLength; // 현재 회문의 길이 저장할 변수

        cin >> test_case;
        for (int i = 0; i < 100; i++) {
            for (int j = 0; j < 100; j++)
                cin >> charVector[i][j];
        }

        maxLength = 0;

        for (int i = 0; i < 100; i++) {
            for (int j = 1; j < 99; j++) {
                currentLength = -1;
                left = right = j;
                while (left >= 0 and right <= 99) {
                    if (charVector[i][left] != charVector[i][right]) {
                        break;
                    }
                    currentLength += 2;
                    left--;
                    right++;
                }
                maxLength = max(maxLength, currentLength);
            }
            for (int j = 1; j < 98; j++) {
                currentLength = 0;
                left = j;
                right = j + 1;
                while (left >= 0 and right <= 99) {
                    if (charVector[i][left] != charVector[i][right]) {
                        break;
                    }
                    currentLength += 2;
                    left--;
                    right++;
                }
                maxLength = max(maxLength, currentLength);
            }
        }

        for (int i = 0; i < 100; i++) {
            for (int j = 1; j < 99; j++) {
                currentLength = -1;
                left = right = j;
                while (left >= 0 and right <= 99) {
                    if (charVector[left][i] != charVector[right][i]) {
                        break;
                    }
                    currentLength += 2;
                    left--;
                    right++;
                }
                maxLength = max(maxLength, currentLength);
            }

            for (int j = 1; j < 98; j++) {
                currentLength = 0;
                left = j;
                right = j + 1;
                while (left >= 0 and right <= 99) {
                    if (charVector[left][i] != charVector[right][i]) {
                        break;
                    }
                    currentLength += 2;
                    left--;
                    right++;
                }
                maxLength = max(maxLength, currentLength);
            }
        }

        printf("#%d %d\n", test_case, maxLength);
    }
    return 0;
}