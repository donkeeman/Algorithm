function solution(brown, yellow) {
    // 가로 w, 세로 h인 경우
    // 갈색은 테두리 1칸이므로 brown = 2(w-1)+2(h-1)
    // 노란색은 가로 세로 1칸씩 빠지므로 yellow = (w-2)(h-2)
    const sum = brown / 2 + 2; // w + h
    const mul = brown + yellow; // w * h
    let h = 1;
    while(true){
        if(mul % h === 0 && mul / h + h === sum){
            break;
        }
        h++;
    }
    return [mul / h, h];
}