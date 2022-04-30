#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    string s;
    getline(cin, s);
    s.erase(0, s.find_first_not_of(' '));
    s.erase(s.find_last_not_of(' ') + 1);
    if (s == "")
        cout << 0;
    else
        cout << count(s.begin(), s.end(), ' ') + 1;
}