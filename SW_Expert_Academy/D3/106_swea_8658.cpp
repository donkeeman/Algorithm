#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
    int temp;
    
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
        int max, min;
		for(int i =0; i<10; i++){
            int sum = 0;
           	cin >> temp;
      		while(true){
            	sum+=temp%10;
                if(temp/10 == 0)
                    break;
                else
                    temp /= 10;
            }
            if(i == 0)
                max = min = sum;
            if(sum >= max)
                max = sum;
            else if(sum <= min)
                min = sum;
        }
        cout << "#" << test_case << " " << max << " " << min << endl;
	}
	return 0;
}