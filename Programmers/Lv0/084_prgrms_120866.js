function solution(board) {
    const length = board.length;
    // 2차원 배열은 Array.from()으로 깊은 복사 불가
    let answer = Array(length).fill([]).map((_, i) => Array.from(board[i]));
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(board[i][j] === 1){
                answer[Math.max(0, i - 1)][Math.max(0, j - 1)] = 2;
                answer[Math.max(0, i - 1)][j] = 2;
                answer[Math.max(0, i - 1)][Math.min(length - 1, j + 1)] = 2;
                answer[i][Math.max(0, j - 1)] = 2;
                answer[i][Math.min(length - 1, j + 1)] = 2;
                answer[Math.min(length - 1, i + 1)][Math.max(0, j - 1)] = 2;
                answer[Math.min(length - 1, i + 1)][j] = 2;
                answer[Math.min(length - 1, i + 1)][Math.min(length - 1, j + 1)] = 2;
            }
        }
    }
    return answer.flat().filter(x => !x).length;
}