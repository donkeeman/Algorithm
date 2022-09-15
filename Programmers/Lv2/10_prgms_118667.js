function solution(queue1, queue2) {
    let answer = 0;
    let sum1 = queue1.reduce((a, b) => a+b, 0);
    let sum2 = queue2.reduce((a, b) => a+b, 0);
    const maxCount = (queue1.length - 1) * 3;
    
    // 없어도 통과는 되지만, 미리 체크하면 더 효율적
    if((sum1 + sum2) % 2){
        return -1;
    }
    
    /*
    while(answer <= maxCount){
        // 합이 작은 쪽에 큰 쪽에서 shift한 것을 push하기
        if(sum1 > sum2){
            let shifted = queue1.shift();
            queue2.push(shifted);
            sum2 += shifted;
            sum1 -= shifted;
            answer++;
        }
        else if(sum1 < sum2){
            let shifted = queue2.shift();
            queue1.push(shifted);
            sum1 += shifted;
            sum2 -= shifted;
            answer++;
        }
        else{
            return answer;
        }
    }
    return -1;
    */
    
    // 22~24번의 시간 초과 해결하기 위해서는 queue1, queue2를 하나의 배열로 합쳐야 함
    const newQueue = queue1.concat(queue2).concat(queue1);
    let startIndex1 = 0;
    let startIndex2 = queue1.length;
    while(answer <= maxCount){
     if(sum1 > sum2){
            let n = newQueue[startIndex1++];
            sum2 += n;
            sum1 -= n;
            answer++;
        }
        else if(sum1 < sum2){
            let n = newQueue[startIndex2++];
            sum1 += n;
            sum2 -= n;
            answer++;
        }
        else{
            return answer;
        }
    }
    return -1;   
}