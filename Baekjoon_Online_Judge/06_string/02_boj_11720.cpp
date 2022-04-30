#include <iostream>
#include <string>

using namespace std;

int main(){
    int size, sum = 0;
    string s;
    cin >> size >> s;
    for(int i = 0; i<size; i++){
        sum += s[i]-'0';
    }
    cout << sum;
}