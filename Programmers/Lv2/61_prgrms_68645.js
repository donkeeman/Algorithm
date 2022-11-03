function solution(n) {
    let answer = Array(n)
        .fill([])
        .map((arr, i) => Array(i + 1).fill(0));
    let [x, y] = [0, 0]; // 좌표
    let i = 1; // 배열에 들어갈 값
    let count = n; // 꺾는 포인트
    const sum = (n * (n + 1)) / 2; // n까지의 합
    let state = 0; // 0: 왼쪽 아래 대각, 1: 직선, 2: 오른쪽 아래 대각
    while (i <= sum) {
        answer[x][y] = i;
        if (state === 0) {
            x++;
        } else if (state === 1) {
            y++;
        } else if (state === 2) {
            x--;
            y--;
        }
        i++;
        if (i === count) {
            count += --n;
            state = (state + 1) % 3;
        }
    }
    return answer.flat();
}