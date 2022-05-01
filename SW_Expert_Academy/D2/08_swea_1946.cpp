#include <iostream>
#include <string>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	cin >> T;
	
	char alphabet;
	int number, count;
	string text;
	for(test_case = 1; test_case <= T; ++test_case)
	{
		scanf("%d\n", &count);
		text = "";
		
		for(int i = 0; i<count; i++){
			scanf("%c %d\n", &alphabet, &number);
			for(int i = 0; i<number; i++){
				text += alphabet;
			}
		}
        
		printf("#%d\n", test_case);
		for(int i = 0; i<text.size(); i++){
			printf("%c", text[i]);
			if(i % 10 == 9)
				printf("\n");
		}
		printf("\n");
	}   
	return 0;
}