function solution(n) {
    // 실제 경우의 수들를 알고 싶어서 배열로 출력
    const answer = [];
    nQueens(0, [0]);
    console.log(answer);
    return answer.length;

    function nQueens(count, arr) {
        if (count === n) {
            answer.push(arr.slice(1));
            return;
        }
        for (let i = 0; i < n; i++) {
            if (checkPromising(arr, count + 1, i + 1)) {
                nQueens(count + 1, arr.concat(i + 1));
            } else {
                continue;
            }
        }
    }

    function checkPromising(arr, row, col) {
        if (arr.length === 1) {
            return true;
        }
        for (let i = 1; i < arr.length; i++) {
            // 같은 열인지 검사
            if (arr[i] === col) {
                return false;
            }
            // 좌상향 대각선인지 검사
            else if (arr[i] - i === col - row) {
                return false;
            }
            // 우상향 대각선인지 검사
            else if (arr[i] + i === col + row) {
                return false;
            }
        }
        return true;
    }
}