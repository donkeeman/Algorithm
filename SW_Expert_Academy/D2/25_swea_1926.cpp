#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int n;
    
    cin >> n;
	
	for(int i = 1; i<n+1; i++)
	{
        if((i%10 == 3 || i%10 == 6 || i%10 == 9) && (i/10%10 == 3 || i/10%10 == 6 || i/10%10 == 9))
            cout << '-'<<'-' << ' ';
        else if((i%10 == 3 || i%10 == 6 || i%10 == 9) || (i/10%10 == 3 || i/10%10 == 6 || i/10%10 == 9))
            cout << '-' << ' ';
        else
            cout << i << ' ';
    }
	return 0;
}