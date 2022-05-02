#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    string temp;
	int variety;
	int check[10] = {0};
    cin >> T;
    
	for(test_case = 1; test_case <= T; ++test_case)
	{
		variety = 0;
        fill_n(check, 10, 0);
        cin >> temp;
        for(int i = 0; i<temp.size(); i++){
        	if(check[temp[i] - '0'] == 0){
            	variety++;
                check[temp[i] - '0'] = 1;
            }
        }
		cout << "#" << test_case << " " << variety << endl;
	}
	return 0;
}