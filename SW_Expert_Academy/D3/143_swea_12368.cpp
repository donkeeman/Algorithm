#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    
    int hour, time, result = 0;
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		cin >> hour >> time;
        result = (hour + time) % 24;
        cout  << "#" << test_case << " " << result << endl;
	}
	return 0;
}