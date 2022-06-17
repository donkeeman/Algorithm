#include <string>
#include <vector>

using namespace std;

int solution(int num) {
    int answer = 0;
    if(num == 1)
        return 0;
    else{
        while(num != 1){
        if(answer >= 500){
            return -1;
            break;
        }
        if(num%2 == 1)
            num = num*3+1;
        else
            num /= 2;
        answer += 1;
        }
    }
    
    return answer;
}