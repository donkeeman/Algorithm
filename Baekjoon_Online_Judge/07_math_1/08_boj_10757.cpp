#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
	// max: 자릿수가 더 큰 수, min: 자릿수가 더 작은 수
	string max, min;
	int sum;
	bool isRegroup = false;
	cin >> max >> min;
	if(max.size() < min.size())
		max.swap(min);
	reverse(max.begin(), max.end());
	reverse(min.begin(), min.end());
	vector<int> result(max.size()+1, 0);
	for(int i = 0; (unsigned)i<max.size(); i++) {
		if((unsigned)i >= min.size())
			sum = max[i]-'0'+ result[i];
		else
			sum = max[i]-'0'+ min[i]-'0' + result[i];
		isRegroup = sum >= 10 ? true : false;
		result[i] = sum%10;
		if(isRegroup)
			result[i+1] += 1;
	}
	if(result.back() == 0)
		result.pop_back();
	for(int i = result.size()-1; i>=0; i--){
		printf("%d", result[i]);
	}
	return 0;
}