#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	int p, q, r, s, w;
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		cin >> p >> q >> r >> s >> w;
        if(w < r)
            cout << "#" << test_case << ' ' << min(p*w, q) << endl;
       else
            cout << "#" << test_case << ' ' << min(p*w, q+(w-r)*s) << endl;
        
		
	}
	return 0;
}