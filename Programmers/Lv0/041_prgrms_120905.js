function solution(n, numlist) {
    return numlist.filter(x => !(x % n));
}