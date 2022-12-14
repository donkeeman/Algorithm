function solution(rows, columns, queries) {
    const answer = [];
    let matrix = Array(rows)
        .fill(0)
        .map((_, i) =>
            Array(columns)
                .fill(0)
                .map((_, j) => i * columns + j + 1)
        );
    queries
        .map(([startX, startY, endX, endY]) => [startX - 1, startY - 1, endX - 1, endY - 1])
        .map(([startX, startY, endX, endY]) => {
        let copiedMatrix = matrix.map(arr => [...arr]);
        let min = 10001;
        for (let i = startX; i <= endX; i++) {
            for (let j = startY; j <= endY; j++) {
                if (
                    i > startX &&
                    i < endX &&
                    j > startY &&
                    j < endY
                ) {
                    continue;
                }
                min = Math.min(min, matrix[i][j]);
                if (i === startX && j !== endY) {
                    copiedMatrix[i][j + 1] = matrix[i][j];
                } else if (i === endX && j !== startY) {
                    copiedMatrix[i][j - 1] = matrix[i][j];
                } else if (j === startY && i !== startX) {
                    copiedMatrix[i - 1][j] = matrix[i][j];
                } else if (j === endY && i !== endX) {
                    copiedMatrix[i + 1][j] = matrix[i][j];
                }
            }
        }
        answer.push(min);
        matrix = copiedMatrix;
    });
    return answer;
}