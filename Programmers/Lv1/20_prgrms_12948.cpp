#include <string>
#include <vector>

using namespace std;

string solution(string phone_number) {
    string answer = phone_number;
    for(int i = 0; i<answer.size(); i++)
        if(i < answer.size()-4)
            answer[i] = '*';
    return answer;
}