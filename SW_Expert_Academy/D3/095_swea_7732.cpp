#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin >> T;
    
	int c_hour, c_minute, c_second, m_hour, m_minute, m_second;
    
	for(test_case = 1; test_case <= T; ++test_case)
	{
        scanf("%d:%d:%d", &c_hour, &c_minute, &c_second);
        
        scanf("%d:%d:%d", &m_hour, &m_minute, &m_second);
        
        if(c_second > m_second){
            m_second += 60;
            m_minute -= 1;
        }
        if(c_minute > m_minute){
            m_minute += 60;
            m_hour -= 1;
        }
        if(c_hour > m_hour)
            m_hour += 24;
        
        printf("#%d %02d:%02d:%02d\n", test_case, (m_hour - c_hour), (m_minute - c_minute), (m_second - c_second));
	}
	return 0;
}