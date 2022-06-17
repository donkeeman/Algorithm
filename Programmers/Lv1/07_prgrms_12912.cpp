#include <string>
#include <vector>

using namespace std;

long long solution(int a, int b) {
    long long answer = 0;
    for(long i = min(a,b); i<max(a, b)+1; i++){
        answer += i;
    }
    return answer;
}