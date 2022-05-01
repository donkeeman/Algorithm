#include <iostream>
#include <cmath>

using namespace std;

int main(int argc, char** argv)
{
    int n;
    cin >> n;
    for(int i = 0;i<n+1; i++)
        cout << pow(2, i) << " ";
	return 0;
}