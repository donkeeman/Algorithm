function solution(n, left, right) {
    let answer = [];
    // 배열 자체에서 구하면 메모리 초과
    // for(let i = 0; i < n; i++){
    //     let arr = Array(n);
    //     for(let j = 0; j < n; j++){
    //         if(j < i){
    //             arr[j] = i + 1;
    //         }
    //         else{
    //             arr[j] = j + 1;
    //         }
    //     }
    //     answer[i] = arr;
    // }
    // return answer.flat().slice(left, right+1);
    
    // left ~ right 사이만 push해도 for문을 두 번 돌리면 시간 초과
    // for(let i = 0; i < n; i++){
    //      for(let j = 0; j < n; j++){
    //          if(i * n + j >= left && i * n + j <= right){
    //                 if(j < i){
    //                     answer.push(i + 1);
    //                 }
    //                 else{
    //                      answer.push(j + 1);
    //                 }
    //          }
    //      }
    // }
    // return answer;
    
    // 1차원으로 바꿨을 때의 규칙을 생각
    for(let i = left; i < right+1; i++){
        answer.push(Math.max(parseInt(i / n), i % n) + 1);
    }
    return answer;
}