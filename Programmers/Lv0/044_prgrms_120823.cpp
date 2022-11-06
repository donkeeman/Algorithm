#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    
    // 이중 for문 사용
    // for(int i = 1; i < n + 1; i++){
    //     for(int j = 1; j < i + 1; j++){
    //         cout << "*";
    //     }
    //     cout << endl;
    // }
    
    // 벡터 사용
    for(int i = 1; i < n + 1; i++){
        vector<char> starArr(i, '*');
        cout << string(starArr.data()) << endl;
    }
    return 0;
}