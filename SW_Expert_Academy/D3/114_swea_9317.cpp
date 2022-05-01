#include <iostream>
#include <string>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	int length;
    int right;
    string origin, writed;
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        right = 0;
		cin >> length >> origin >> writed;
        for(int i = 0; i<length; i++){
        	if(origin[i] == writed[i])
                right++;
        }
        cout << "#" << test_case << " " << right << endl;
	}
	return 0;
}