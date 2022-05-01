#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
	string word;
	for(test_case = 1; test_case <= T; ++test_case) {
        cin >> word;
        string reversedWord = word;
        reverse(reversedWord.begin(), reversedWord.end());
        if(word.substr(0, word.size()/2) == reversedWord.substr(0, word.size()/2))
			cout << "#" << test_case << " 1" << endl;
        else
            cout << "#" << test_case << " 0" << endl;
          
	}
	return 0;
}