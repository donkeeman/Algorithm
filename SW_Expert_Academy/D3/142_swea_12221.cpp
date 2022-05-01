#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		int a, b;
        cin >> a >> b;
        cout << "#" << test_case << " ";
        if(a >= 10 or b >= 10)
            cout << -1 << endl;
        else
            cout << a*b << endl;
	}
	return 0;
}