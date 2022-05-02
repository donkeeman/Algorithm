#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    string s;
    
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        int index = 0;
		cin >> s;
        vector<vector<string>> tc(5, vector<string>(4*s.size()+ 1, "."));
        for(int i = 0; i<tc.size()/2+1; i++){
        	for(int j = 0; j<tc[i].size(); j++){
                if(i == 2 && j%4 == 2){
            		tc[2][j] = s[index];
                	index++;
				}
        		else if((i == 0 && j%4 == 2) || (i == 1 && j%2 == 1) || (i == 2 && j%4 == 0))
                    tc[i][j] = "#";
                tc[4-i][j] = tc[i][j];
            }
        }
        for(int i = 0; i<tc.size(); i++){
        	for(int j = 0; j<tc[i].size(); j++)
                cout << tc[i][j];
            cout << endl;
        }
	}
	return 0;
}