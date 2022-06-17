#include <string>
#include <vector>

using namespace std;

int solution(string s) {
    int answer = 0;
    vector<string> number = { "zero", "one", "two", "three", "four", 
                             "five", "six", "seven", "eight", "nine"};
    for(int i = 0; i<number.size(); i++){
        while(s.find(number[i]) != std::string::npos)
            s.replace(s.find(number[i]), number[i].length(), to_string(i));
    }
    answer = stoi(s);
    return answer;
}