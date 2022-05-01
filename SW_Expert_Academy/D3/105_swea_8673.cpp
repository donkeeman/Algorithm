#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;
int gap = 0;
int s_elim(vector<int> v);

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int n;
    vector<int> coders;
    int difficulty;
	
    cin >> T;
    
	for(test_case = 1; test_case <= T; ++test_case)
	{
        coders.clear();
        gap = 0;
		cin >> n;
        for(int i = 0; i<pow(2, n); i++){
            cin >> difficulty;
        	coders.push_back(difficulty);
        }
        cout << "#" << test_case << " " << s_elim(coders) << endl;
    }
	return 0;
}

int s_elim(vector<int> v){
    if(v.size() == 1)
        return gap;
	else{
    	for(int i = 0; i<v.size()-1; i+=2){
            if(v[i] < v[i+1])
            	iter_swap(v.begin()+i, v.begin()+i+1);
            gap += v[i] - v[i+1];
            v[i+1] = 0;
        }
        for(int i = 0; i<v.size(); i++){
        	v.erase(remove(v.begin(), v.end(), 0), v.end());
        }
        return s_elim(v);
    }
}