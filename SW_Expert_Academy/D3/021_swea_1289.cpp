#include <iostream>
#include <string>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    string origin;
	string zero;
    int count;
    
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        count = 0;
        zero = "";
		cin >> origin;
        for(int i = 0; i<origin.size(); i++)
            zero += "0";
        for(int i = 0; i<origin.size(); i++){
                
        	if(zero[i] != origin[i]){
                zero.replace(i, zero.size(), zero.size()-i, to_string(!(zero[i]-'0'))[0]);
                count+=1;
            }
        }
        cout << "#" << test_case << " "<< count << endl;
	}
	return 0;
}