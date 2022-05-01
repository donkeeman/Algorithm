#include <iostream>
#include <cmath>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    
    cin >> T;
    
	for(test_case = 0; test_case < T; test_case++)
	{
        int temp;
    	int sum = 0;
        
      	for(int i = 0; i<10; i++){
           	cin >> temp;
          	sum += temp;
       	}
        cout <<"#" << test_case+1 << " " << int(floor(sum/10.0 + 0.5)) << endl;
	}
	return 0;
}