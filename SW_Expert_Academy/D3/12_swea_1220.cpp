#include <iostream>
#include <string>
 
using namespace std;
 
int main(int argc, char** argv)
{
    int test_case;
    int count, size;
    int intArray[100][100];
    string temp;
     
    for(test_case = 1; test_case <= 10; ++test_case)
    {
        count = 0;
        
        cin >> size;
         
        for(int i = 0; i < size; i++){
            for(int j = 0; j < size; j++){
                cin >> intArray[i][j];
            }
        }
         
        for (int j = 0; j < size; j++) {
            for (int i = 0; i < size; i++) {
                if (intArray[i][j] == 1) {
                    for (int k = i; k < size; k++) {
                        if (intArray[k][j] == 2) {
                            count++;
                            i = k;
                            break;
                        }
                    }
                }
            }
        }
        printf("#%d %d\n", test_case, count);
        
    }
    return 0;
}