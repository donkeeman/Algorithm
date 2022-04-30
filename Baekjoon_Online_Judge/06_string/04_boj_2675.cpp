#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main(){
	bool hasManyMax = false;
    int alphabet[26] = {0,};
    string s;
    cin >> s;
    for(int i = 0; (unsigned)i<s.size(); i++){
    	if(s[i]>='a' and s[i]<='z')
    		alphabet[s[i]-'a']++;
    	else
    		alphabet[s[i]-'A']++;
    }
    int* max = max_element(alphabet, alphabet+26);
    int maxIndex = distance(alphabet, max);
    for(int i = 0; i<26; i++){
    	if(alphabet[i] == *max and i != maxIndex){
    		hasManyMax = true;
    		break;
    	}
    }
    hasManyMax ? cout << '?' : cout << (char)(maxIndex+'A');
}