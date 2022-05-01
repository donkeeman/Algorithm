#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(pair<int, int> a, pair<int, int> b){
    if(a.second == b.second)
        return a.first<b.first;
	return a.second>b.second;
}

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int n, m;
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		cin >> n >> m;
        vector<pair<int, int>> count(n+m+1);
        for(int i = 1; i<n+1; i++){
        	for(int j = 1; j<m+1; j++){
                if(count[i+j].first == 0)
                    count[i+j].first = i+j;
                count[i+j].second += 1;
            }
        }
        sort(count.begin(), count.end(), compare);
        vector<pair<int, int>>::iterator it = count.begin();
        
        cout << "#" << test_case << " ";
        while(true){
        	cout << it->first << " ";
            if(it->second != it[1].second)
                break;
            else
                it++;
        }
        cout << endl;  
	}
	return 0;
}