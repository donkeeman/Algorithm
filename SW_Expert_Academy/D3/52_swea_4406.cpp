#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    string str, str2;
    char vowel[5] = {'a', 'e', 'i', 'o', 'u'};
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		cin >> str;
        str2 = "";
        for(int i = 0; i<str.size(); i++){
        	if(find(vowel, vowel+5, str[i]) == vowel+5)
                str2 += str[i];
        }
        cout << "#" << test_case << " " << str2 << endl;
	}
	return 0;
}