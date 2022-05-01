#include <iostream>
#include <set>
#include <string>
#include <algorithm>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    set<char> num;
    string n = "";
    string nu;
    
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case) {
		int count = 1;
        num.clear();
        cin >> n;
        while(num.size() < 10){
            nu = to_string(stoi(n)*count);
            for(auto s : nu)
                num.insert(s);
   			count++;
        }
		cout << "#" << test_case << " " << (count-1)*stoi(n) << endl;
	}
	return 0;
}