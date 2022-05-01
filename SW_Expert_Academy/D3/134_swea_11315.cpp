#include <iostream>
#include <vector> // 배열 역할을 할 벡터

using namespace std;

bool CheckHorizontal(vector<vector<char>> v); // 가로 오목 판정
bool CheckVertical(vector<vector<char>> v); // 세로 오목 판정
bool CheckDiagonal(vector<vector<char>> v); // 대각선 오목 판정

int main(int argc, char** argv)
{
	int test_case;
	int T;
	
	int n; // 오목판의 한 줄의 크기를 담을 변수
	vector<vector<char>> concave; // 오목판 역할을 할 2차원 벡터 (배열 대신)
	
	cin>>T;
	
	for(test_case = 1; test_case <= T; ++test_case)
	{
		cin >> n;
		concave.assign(n, vector<char>(n, 0)); // 벡터의 크기를 n*n으로 할당 및 0으로 초기화
        
		for(int i = 0; i<n; i++){
			for(int j = 0; j<n; j++){
				cin >> concave[i][j];
			}
		}
		
		printf("#%d ", test_case);
        
		if(CheckHorizontal(concave) or CheckVertical(concave) or CheckDiagonal(concave))
			printf("%s\n", "YES");
		else
			printf("%s\n", "NO");
	}
	return 0;
}
// 가로 오목 판정 메소드
bool CheckHorizontal(vector<vector<char>> v){
	for (int i = 0; i < v.size(); i++) {
		for (int j = 0; j < v.size() - 4; j++) { // 0~(n-5)열까지
			if (v[i][j] == 'o' and v[i][j + 1] == 'o' and v[i][j + 2] == 'o' and v[i][j + 3] == 'o' and v[i][j + 4] == 'o') // 연속 5개가 모두 같으면
				return true;
		}
	}
	return false;
}
// 세로 오목 판정 메소드
bool CheckVertical(vector<vector<char>> v){
	for (int i = 0; i < v.size() - 4; i++) { // 0~(n-5)행까지
		for (int j = 0; j < v.size(); j++) {
			if (v[i][j] == 'o' and v[i + 1][j] == 'o' and v[i + 2][j] == 'o' and v[i + 3][j] == 'o' and v[i + 4][j] == 'o') // 연속 5개가 모두 같으면
				return true;
		}
	}
	return false;
}
// 대각선 오목 판정 메소드
bool CheckDiagonal(vector<vector<char>> v){
    for (int i = 2; i < v.size() - 2; i++) {
		for (int j = 2; j < v.size() - 2; j++) {
			if ((v[i][j] == 'o' and v[i + 1][j - 1] == 'o' and v[i + 2][j - 2] == 'o' and v[i - 1][j + 1] == 'o' and v[i - 2][j + 2] == 'o') // / 대각선으로 연속 5개가 모두 같으면
			or (v[i][j] == 'o' and v[i - 1][j - 1] == 'o' and v[i - 2][j - 2] == 'o' and v[i + 1][j + 1] == 'o' and v[i + 2][j + 2] == 'o')) // \ 대각선으로 연속 5개가 모두 같으면
				return true;
		}
	}
	return false;
}