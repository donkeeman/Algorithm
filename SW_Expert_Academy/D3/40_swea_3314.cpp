#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int score;
    int sum;
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        sum = 0;
        for(int i = 0; i<5; i++){
        	cin >> score;
        	sum += score > 40?score:40;
        }
        cout << "#" << test_case << " " << sum/5 << endl;
	}
	return 0;
}