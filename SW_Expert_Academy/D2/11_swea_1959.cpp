#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int combination(vector<int>, vector<int>, int);

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int n;
    int m;
    int temp;
    
	
    cin >> T;
    
	for(test_case = 1; test_case <= T; ++test_case)
	{
        cin >> n;
        cin >> m;
        vector<int> a;
    	vector<int> b;
        for(int i = 0; i<n; i++){
            cin >> temp;
            a.push_back(temp);
        }
        for(int i = 0; i<m; i++){
            cin >> temp;
            b.push_back(temp);
        }
       	if(n<m)
			cout << "#" << test_case << " " << combination(a, b, m-n) << endl;
        else
            cout << "#" << test_case << " " << combination(b, a, n-m) << endl;
	}
  
	return 0;
}  
int combination(vector<int> min, vector<int> max, int size){
    int total = 0;
    vector<int> sub_max;
    for(int i = 0; i<size+1; i++){
     	int sum = 0;
        sub_max.assign(max.begin()+i, max.begin()+min.size()+i);
        for(int j = 0; j<min.size(); j++){
         	sum += min[j]*sub_max[j];
        }
        if(sum > total)
            total = sum;
	}
	return total;
}