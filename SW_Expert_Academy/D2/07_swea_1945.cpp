#include <iostream>
#include <cmath>
using namespace std;

int f(int n, int operand){
    int count = 0;
    while(true){
        	if(n%operand != 0)
                break;
            else{
                n /= operand;
                count++;
            }
        }
        cout << count << " ";
    return n;
}
int main(int argc, char** argv)
{
	int test_case;
	int T;
	int n;
	cin>>T;
	for(test_case = 1; test_case <= T; ++test_case)
	{
        cout << "#" << test_case << " "; 
        cin >> n;
        n = f(n, 2);
        n = f(n, 3);
        n = f(n, 5);
        n = f(n, 7);
        n = f(n, 11);
        cout << endl;
    }
	return 0;
}