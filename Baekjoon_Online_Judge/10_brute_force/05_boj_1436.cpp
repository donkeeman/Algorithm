#include <iostream>
#include <string>

using namespace std;

int main() {
	int n;
	scanf("%d", &n);
	int i = 666, count = 1;
	while(true){
	    if(to_string(i).find("666") != string::npos){
	    	if(count == n){
	        	printf("%d", i);
	        	break;
	    	}
	    	else
	    	  count++;
	    }
	    i++;
	}
}