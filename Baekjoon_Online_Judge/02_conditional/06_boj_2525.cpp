#include <iostream>

using namespace std;

int main(){
    int a, b, c;
    cin >> a >> b >> c;
    b += c;
    while(b>=60){
        b -= 60;
        a += 1;
    }
    if(a >= 24)
        a -= 24;
    cout << a << " " << b;
}