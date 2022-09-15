function getGCD(a, b){
    let max = a >= b ? a : b;
    let min = a >= b ? b : a;
    let temp;
    while(max !== 0){
        temp = min % max;
        min = max;
        max = temp;
    }
    return min;
}

function solution(w, h) {
    // 대각선과 만나는 정사각형 개수 구하는 공식
    // 가로 + 세로 - 가로와 세로의 최대공약수
    return w * h - (w + h - getGCD(w, h));
}