function solution(box, n) {
    return box.reduce((a, b) => a * parseInt(b / n), 1);
}