function solution(sides) {
    const min = Math.min(...sides);
    return min * 2 - 1;
}