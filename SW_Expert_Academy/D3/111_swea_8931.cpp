#include <iostream>
#include <list>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin>>T;
	
    int n;
   	list<int> l;
	for(test_case = 1; test_case <= T; ++test_case)
	{

        int sum = 0;
        
		l.clear();
        cin>>n;
        int temp;
        for(int i=0;i<n; i++){
           cin >> temp;
        if(temp ==0)
            l.pop_back();
        else
            l.push_back(temp);
        }
        
        if(!l.empty()){
        list<int>::iterator iter;
        list<int>::iterator iterEnd = l.end();
        
        for(iter = l.begin(); iter != iterEnd; ++iter){
           sum += *iter;
        }
        }
        cout << "#" << test_case<< " " << sum << endl;

	}
	return 0;
}