#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin>>T;
	string date, year, month, day;
    int monthNum, dayNum;
	for(test_case = 0; test_case < T; ++test_case)
	{
        cout <<  "#" << test_case+1 << " ";
       	cin >> date;
        if(date.size() == 8){
            year = date.substr(0,4);
            month =date.substr(4, 2);
            monthNum= (month[0]-'0')*10+(month[1]-'0');
            day = date.substr(6,2);
            dayNum = (day[0]-'0')*10+(day[1]-'0');
            if(monthNum > 0 and monthNum<13 and dayNum > 0){
             	if(((monthNum == 1 or monthNum == 3 or monthNum == 5 or monthNum == 7  or monthNum == 8  or monthNum == 10 or monthNum == 12) and dayNum<32)
                  or ((monthNum == 4  or monthNum == 6 or monthNum == 9  or monthNum == 11) and dayNum < 31)
                  or (monthNum == 2 and dayNum < 29))
                    cout << year << "/" << month << "/" << day << endl;
                else
                    cout << -1 << endl;
            }
            else cout << -1 << endl;
        }
        else cout << -1 << endl;
	}
	return 0;
}