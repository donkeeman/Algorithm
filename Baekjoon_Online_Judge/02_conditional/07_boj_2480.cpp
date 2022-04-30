#include <iostream>
#include <algorithm>

using namespace std;

int main(){
    int a, b, c, money;
    cin >> a >> b >> c;
    if(a == b and b == c)
        money = 10000+a*1000;
    else if(a != b and b != c and a != c)
        money = 100*max({a, b, c});
    else{
        if((a == b and a != c) or (a != b and a == c))
            money = 1000+a*100;
        else
            money = 1000+b*100;
    }
    cout << money;
}