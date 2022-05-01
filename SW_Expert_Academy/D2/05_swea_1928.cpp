#include <iostream>
#include <algorithm>
#include <vector>
#include <bitset>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
    vector<char> base;
    for(char c = 'A'; c<='Z'; c++){
    	base.push_back(c);
    }
    for(char c = 'a'; c<='z'; c++){
    	base.push_back(c);
    }
    for(char c = '0'; c<='9'; c++){
    	base.push_back(c);
    }
    base.push_back('+');
    base.push_back('/');
    
    string encoded, decoded, temp;
    bitset<6> b;
	for(test_case = 1; test_case <= T; ++test_case)
	{
        decoded = temp = "";
		cout << "#" << test_case <<" ";
        cin >> encoded;
        for(int i = 0; i<encoded.size(); i++){
            b = find(base.begin(), base.end(), encoded[i]) - base.begin();
            decoded += b.to_string();
        }
        for(int i = 0; i<decoded.size()/8; i++){
            string t = decoded.substr(8*i, 8);
        	cout << (char)stoi(t,0, 2);
        }
        cout << endl;
	}
	return 0;
}