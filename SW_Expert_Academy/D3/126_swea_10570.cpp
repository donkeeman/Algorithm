#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int a, b;
   
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        int count = 0;
        cin >> a >> b;
        for(int i = a; i<=b; i++){
            if(sqrt(i)/1.00 == (int)sqrt(i)){
				string num = to_string(i);
				string rnum = num;
				reverse(rnum.begin(), rnum.end());
    			string sqrtn = to_string((int)sqrt(i));
    			string rsqrtn = sqrtn;
    			reverse(rsqrtn.begin(), rsqrtn.end());
    			if(num == rnum && sqrtn == rsqrtn)
    				count += 1;
			}
        }
        
		cout << "#" << test_case << " " << count << endl;
		
	}
	return 0;
}