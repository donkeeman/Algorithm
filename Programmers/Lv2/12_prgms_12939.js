function solution(s) {
    s = s.split(" ");
    return Math.min(...s) + " " + Math.max(...s);
}