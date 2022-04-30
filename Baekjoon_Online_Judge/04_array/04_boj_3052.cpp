#include <iostream>
#include <set>

int main(){
    int n;
    std::set<int> s;
    for(int i = 0; i<10; i++){
        scanf("%d", &n);
        s.insert(n%42);
    }
    printf("%ld", s.size());
}