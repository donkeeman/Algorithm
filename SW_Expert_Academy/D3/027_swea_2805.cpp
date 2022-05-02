#include <iostream>
#include <vector>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int n;
	char temp;
    
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        int sum = 0;
		cin >> n;
        if(n == 1)
            cin >> sum;
        else{
            vector<vector<int>> farm(n, vector<int>(n));
         	for(int i = 0; i<n; i++){
        		for(int j = 0; j<n; j++){
                    scanf("%1d", &farm[i][j]);
                }
            }
            for(int i = 0; i<n/2; i++)
                for(int j = 0; j<n/2; j++)
                	if(i+j >= n/2)
                        sum += farm[i][j] + farm[n-i-1][j] + farm[i][n-j-1] + farm[n-i-1][n-j-1];
            for(int i = 0; i<n; i++)
            	sum += farm[n/2][i]+farm[i][n/2];
            sum -= farm[n/2][n/2];
        }
        cout << "#" << test_case << " " << sum << endl;
	}
	return 0;
}