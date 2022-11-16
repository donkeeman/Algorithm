function solution(n) {
    const answer = [];
    hanoi(1, 2, 3, n);
    return answer;
    
    function hanoi(source, temp, destination, n) {
        if (n === 1) {
            answer.push([source, destination]);
            return;
        }
        else {
            // 이전 단계를 1~2로 옮기는 과정 + n번째 원판 1~3으로 옮기는 과정 ([1,3]) + 이전 단계를 2~3으로 옮기는 과정 
            hanoi(source, destination, temp, n - 1);
            answer.push([source, destination]);
            hanoi(temp, source, destination, n - 1);
        }
    }
}