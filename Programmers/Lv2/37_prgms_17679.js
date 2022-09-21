function solution(m, n, board) {
    let answer = 0;
    board = board.map((arr) => arr.split(""));
    while (true) {
        let isExist = false;
        let indexArr = [];
        // 4개 붙어있는 거 좌측 상단의 인덱스 저장
        for (let i = 0; i < board.length - 1; i++) {
            for (let j = 0; j < board[i].length - 1; j++) {
                if (
                    board[i][j] !== "-" &&
                    board[i][j] === board[i + 1][j] &&
                    board[i][j] === board[i][j + 1] &&
                    board[i][j] === board[i + 1][j + 1]
                ) {
                    isExist = true;
                    indexArr.push([i, j]);
                }
            }
        }
        // 원본 배열과 비교
        if (!isExist) {
            break;
        }
        // 저장된 인덱스에서 붙은 4개의 원소 제거
        // 알파벳 뿐만 아니라 빈칸 ""로 대체해도 에러나기 때문에 "-"로 대체
        indexArr.map(([i, j]) => {
            if(board[i][j] !== "-"){
                answer++;
            }
            board[i][j] = "-";
            if(board[i][j + 1] !== "-"){
                answer++;
            }
            board[i][j + 1] = "-";
            if(board[i + 1][j] !== "-"){
                answer++;
            }
            board[i + 1][j] = "-";
            if(board[i + 1][j + 1] !== "-"){
                answer++;
            }
            board[i + 1][j + 1] = "-";
        });
        // 배열 돌면서 비어있는 곳은 원소 내려주기
        for (let i = 0; i < n; i++) {
            for (let j = m - 1; j > 0; j--) {
                if (board[j][i] === "-") {
                    if (j > 1) {
                        let index = 2;
                        while (true) {
                            if (j - index < 0) {
                                break;
                            }
                            if (board[j - index][i] !== "-") {
                                board[j][i] = board[j - index][i];
                                board[j - index][i] = "-";
                                break;
                            }
                            index++;
                        }
                    } else {
                        board[j][i] = "-";
                    }
                }
            }
        }
        board = board.filter((arr) => arr.join("") !== "-----");
    }
    return answer;
}