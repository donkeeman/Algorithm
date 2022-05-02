#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int min, max, sport;
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		cin >> min >> max >> sport;
        if(sport>max)
            cout << "#" << test_case << " -1" << endl;
        else if(sport <= max && sport >= min)
            cout << "#" << test_case << " 0" << endl;
        else
            cout << "#" << test_case << " " << min - sport << endl;
		
	}
	return 0;
}