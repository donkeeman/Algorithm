#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string s) {
    string answer = "";
    vector<int> temp;
    for(int i = 0; i<s.size(); i++){
        temp.push_back((int)s[i]);
    }
    sort(temp.begin(), temp.end());
    for(int i = 0; i<s.size(); i++){
        answer += (char)temp.back();
        temp.pop_back();
    }
    return answer;
}