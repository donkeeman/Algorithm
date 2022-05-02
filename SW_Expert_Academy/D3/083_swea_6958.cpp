#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
    int person;
    int problem;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        cin >> person >> problem;
		int max = -1;
        int count = 1;
        for(int i = 0;i<person; i++){
            int sum = 0;
        	for(int j = 0; j<problem; j++){
                int temp;
                cin >> temp;
                sum += temp;
            }
            if(sum>max){
                max = sum;
                count = 1;
            }
            else if(sum == max)
                count++;
        }
        cout << "#" << test_case << " " << count << " " << max << endl;
	}
	return 0;
}