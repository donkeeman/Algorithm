#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	int a, b, c;
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		cin >> a>> b>> c;
        cout << "#" << test_case << " ";
        if(a == b)
            cout << c << endl;
        else if(a == c)
            cout << b << endl;
        else
            cout << a << endl;
	}
	return 0;
}