#include <iostream>
#include <string>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    cin >> T;
	string line;
	for(test_case = 1; test_case <= T; ++test_case)
	{
        cout << "#" << test_case << " ";
        cin >> line;
       	for(int i = 1; i<11; i++){
        	if(line.substr(0, i) == line.substr(i, i)){
                cout << i << endl;
                break;
           	}
    	}
	}
	return 0;
}