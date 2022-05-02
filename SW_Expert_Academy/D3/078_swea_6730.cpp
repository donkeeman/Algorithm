#include <iostream>
#include <cmath>
#include <vector>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    vector<int> obstacles;
	cin>>T;
    int num;
    
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        int to_up = 0;
        int to_down = 0;
		obstacles.clear();
        cin >> num;
        for(int i = 0; i<num; i++){
        	int temp;
            cin >> temp;
            obstacles.push_back(temp);
        }
        if(num >=2){
            for(int i = 0; i<num-1; i++){
        		if(obstacles[i+1] > obstacles[i] && (abs(obstacles[i] - obstacles[i+1])) >= to_up)
                	to_up = abs(obstacles[i] - obstacles[i+1]);
                else if(obstacles[i+1] < obstacles[i] && (abs(obstacles[i] - obstacles[i+1])) >= to_down)
                	to_down = abs(obstacles[i] - obstacles[i+1]);
            
        	}
        }
        
        cout << "#" << test_case << " " << to_up << " " << to_down << endl;
	}
	return 0;
}