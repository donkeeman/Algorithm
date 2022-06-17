#include <string>
#include <vector>

using namespace std;

string solution(int n) {
    string answer = "";
    for(int i = 0; i<n; i++)
        i%2 == 0?answer += "수":answer += "박";
    return answer;
}