function solution(land) {
    // 동적 프로그래밍으로 해결해야 함
    // 각 행까지의 최대합을 저장 후 다음 행에서 사용
    for(let i = 1; i<land.length; i++){
        for(let j = 0; j<4; j++){
            land[i][j] += Math.max(...land[i-1].filter((_, index) => index !== j));
        }
    }
    return Math.max(...land[land.length - 1]);
}