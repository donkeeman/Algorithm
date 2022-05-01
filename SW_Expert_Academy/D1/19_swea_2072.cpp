#include <iostream>
#define SIZE 10

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin>>T;
	
	for(test_case = 0; test_case < T; ++test_case)
	{
		int oddSum = 0;
        int testcase[SIZE] = {0};
		for(int i = 0; i<SIZE; i++){
            cin >> testcase[i];
            if(testcase[i] % 2)
                oddSum+=testcase[i];
        }
		cout << "#" << test_case+1 << " " << oddSum;
        if(test_case != T-1)
            cout << endl;
	}
	return 0;
}