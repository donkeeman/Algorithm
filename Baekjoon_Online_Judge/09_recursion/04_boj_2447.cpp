#include <iostream>

int table[2187][2187];

void makeStarTable(int startX, int startY, int n) {
	if (n < 1) 
		return;
	for (int i = startX; i < startX + n; i++) {
		for (int j = startY; j < startY + n; j++) {
			if (i >= startX + n / 3 and i < startX + n / 3 * 2
				and j >= startY + n / 3 and j < startY + n / 3 * 2) {
				table[i][j] = ' ';
			}
		}
	}

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) 
			makeStarTable(startX + n / 3 * i, startY + n / 3 * j, n / 3);
	}
}

int main() {
	int n;
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++)
			table[i][j] = '*';
	}

	makeStarTable(0, 0, n);
	
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++)
			printf("%c", table[i][j]);
		printf("\n");
	}
}