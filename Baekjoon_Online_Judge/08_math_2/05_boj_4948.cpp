#include <iostream>
#include <vector>

using namespace std;

vector<int> eratosthenes(int n){
	vector<int> v(n, 1);
	v[0] = v[1] = 0;
	for(int i = 2; (unsigned)i<v.size(); i++){
		if(v[i] == 1){
			for(int j = i*2; (unsigned)j<v.size(); j+=i){
				if(v[j] != 0)
					v[j] = 0;
			}
		}
		
	}
	return v;
}

int main(){
	int n, count;
	vector<int> primeNum = eratosthenes(246912);
	while(true){
		count = 0;
		scanf("%d", &n);
		if(n == 0)
			break;
		for(int i = n+1; i<=n*2; i++){
			if(primeNum[i] == 1)
				count++;
		}
		printf("%d\n", count);
	}
	return 0;
}