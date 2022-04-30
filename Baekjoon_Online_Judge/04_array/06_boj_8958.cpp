#include <iostream>
#include <string>

using namespace std;

int main(){
    int size, sum, n;
    cin >> size;
    string s;
    for(int i = 0; i<size; i++){
        sum = n = 0;
        cin >> s;
        for(int j = 0; (unsigned)j<s.size(); j++)
        	s[j] == 'O'?sum += ++n:n = 0;
        cout << sum << endl;
    }
}