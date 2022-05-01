#include <iostream>
#include <vector>

using namespace std;

void eratosthenes(int min, int max){
	vector<int> primes;
	for(int i = 0; i<max+1; i++){
		primes.push_back(i);
	}
	primes[1] = primes[0] = 0;
	for(int i = 2; (unsigned)i<primes.size(); i++){
		if(primes[i] == 0)
			continue;
		for(int j = i; (unsigned)j<primes.size();j+=i){
			if(j != i)
				primes[j] = 0;
		}
	}
	for(int i = min; (unsigned)i<primes.size(); i++){
		if(primes[i] != 0)
			printf("%d\n", primes[i]);
	}
}

int main() {
	int min, max;
	scanf("%d %d", &min, &max);
	eratosthenes(min, max);
}