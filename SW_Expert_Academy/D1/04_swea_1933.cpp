#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
    int n;
    cin >> n;
    for(int i = 1; i<n+1; i++){
        if(n%i == 0)
            cout << i << " ";
	}
	return 0;
}