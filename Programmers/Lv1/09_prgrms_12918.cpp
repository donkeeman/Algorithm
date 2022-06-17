#include <string>
#include <vector>

using namespace std;

bool solution(string s) {
    bool answer = false;
    int i = 0;
    if(s.size() == 4 or s.size() == 6){
        while(i<s.size()){
            if(!isdigit(s[i]))
                break;
            else if(i == s.size()-1)
                answer = true;
            i++;
                
        }
    }
            
    return answer;
}