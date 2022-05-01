#include <iostream>
#include <algorithm>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        string s;
		cin >> s;
        sort(s.begin(), s.end());
        if(s[0] == s[1] and s[2] == s[3] and s[0] != s[2])
            cout << "#" << test_case << " Yes" << endl;
        else
            cout << "#" << test_case << " No" << endl;
	}
	return 0;
}