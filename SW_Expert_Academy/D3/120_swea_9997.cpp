#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	int degree;
	cin>>T;
    int hour, min;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        hour = 0;
        min = 0;
		cin >> degree;
        hour = degree/30;
        min = degree%30/0.5;
        hour = hour>=12?hour-12:hour;
        cout << "#" << test_case << " " << hour << " " << min << endl;
	}
	return 0;
}