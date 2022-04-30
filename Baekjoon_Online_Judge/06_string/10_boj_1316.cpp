#include <iostream>
#include <string>

using namespace std;

bool isGroupWord(string s){
    bool alphabet[26] = {0};
    int size = s.size();
    for(int i = 0; i<size; i++){
    	if(i == size-1){
    		if(alphabet[s[i]-'a'])
    			return false;
    	}
    	else if(s[i] != s[i+1]){
            if(alphabet[s[i]-'a'])
                return false;
            else
                alphabet[s[i]-'a'] = 1;
        }
        else
        	continue;
    }
    return true;
}

int main(){
    int n, count = 0;
    scanf("%d", &n);
    string s;
    for(int i = 0; i<n; i++){
        cin >> s;
        if(isGroupWord(s))
            count++;
    }
    printf("%d", count);
}