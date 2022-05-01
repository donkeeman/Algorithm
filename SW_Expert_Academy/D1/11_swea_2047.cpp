#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
    
	string temp;
	cin >> temp;
    transform(temp.begin(), temp.end(), temp.begin(), ::toupper);
	cout << temp << endl;
	return 0;
}