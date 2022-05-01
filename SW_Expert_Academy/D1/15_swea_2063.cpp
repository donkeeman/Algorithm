#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int temp;
    vector<int> testcases;
	
	cin>>T;
	
	for(test_case = 0; test_case < T; ++test_case){
        cin >> temp;
    	testcases.push_back(temp);
    }
    sort(testcases.begin(), testcases.end());
    
    cout << testcases[T/2];
    
	return 0;
}