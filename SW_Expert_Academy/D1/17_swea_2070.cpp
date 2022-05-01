#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin>>T;
	
	for(test_case = 0; test_case < T; ++test_case)
	{
        int n1, n2 = 0;
        cin >> n1 >> n2;
        if(n1 < n2) 
            cout << "#" << test_case+1 << " < " << endl;
        else if(n1 > n2)
            cout << "#" << test_case+1 << " > " << endl;
        else
            cout << "#" << test_case+1 << " = " << endl;
	}
	return 0;
}