#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
	for(test_case = 0; test_case < T; ++test_case)
	{
		int testcases[10] = {0};  
        for(int i = 0; i<10; i++)
        	cin >> testcases[i];
		int max = 0;
		for(int i = 0; i<10; i++){
        	if(max < testcases[i])
                max = testcases[i];
        }
		cout << "#"<<test_case+1<<" "<<max;
        if(test_case != T-1)
            cout << endl;
    }
	return 0;
}