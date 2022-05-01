#include <iostream>
#include <vector>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	int n;
    
    int temp;
    vector<int> testcase;
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        testcase.clear();
        int sum = 0;
    	int count = 0;
		cin >> n;
        
        for(int i= 0; i<n; i++){
            cin >> temp;
            sum += temp;
            testcase.push_back(temp);
        }
        for(int i= 0; i<n; i++){
            if(testcase[i] <= sum/n)
                count++;
        }
		cout << "#" << test_case << " " <<  count << endl;
	}
	return 0;
}