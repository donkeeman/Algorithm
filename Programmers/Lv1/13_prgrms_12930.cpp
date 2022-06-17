#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    string answer = "";
    string temp = "";
    for(int i = 0; i<s.size(); i++){
        if(s[i] == ' '){
            for(int i = 0; i<temp.size(); i++){
                temp[i] = i % 2 ?tolower(temp[i]):toupper(temp[i]);
            }
            answer += temp + ' ';
            temp = "";
        }
        else if(i == s.size()-1){
            temp += s[i];
            for(int i = 0; i<temp.size(); i++){
                temp[i] = i % 2 ?tolower(temp[i]):toupper(temp[i]);
            }
            answer += temp;
        }
        else
            temp += s[i];
        
    }
  
    return answer;
}