#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main(){
    int alphabet[26];
    fill(alphabet, alphabet+26, -1);
    string s;
    cin >> s;
    for(int i = 0; (unsigned)i<s.size(); i++){
        if(alphabet[s[i]-'a'] == -1)
            alphabet[s[i]-'a'] = i;
    }
    for(int i = 0; i<26; i++)
        printf("%d ", alphabet[i]);
}