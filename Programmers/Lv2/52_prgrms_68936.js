function solution(arr) {
    let answer = [0, 0];
    quad(arr);
    return answer;

    function quad(numArr) {
        if (numArr.length === 1) {
            answer[numArr[0]]++;
            return;
        }
        if (numArr.flat().reduce((a, b) => a + b, 0) === 0) {
            answer[0]++;
            return;
        } else if (numArr.flat().reduce((a, b) => a * b, 1) === 1) {
            answer[1]++;
            return;
        } else {
            // 4개로 나누기
            const lt = [], rt = [], lb = [], rb = [];
            const mid = parseInt(numArr.length / 2);
            numArr.map((row, i) => {
                if (i < mid) {
                    lt.push(row.slice(0, mid));
                    rt.push(row.slice(mid));
                } else {
                    lb.push(row.slice(0, mid));
                    rb.push(row.slice(mid));
                }
            });
            quad(lt);
            quad(rt);
            quad(lb);
            quad(rb);
        }
    }
}