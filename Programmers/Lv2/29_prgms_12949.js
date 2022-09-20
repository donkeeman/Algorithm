function solution(arr1, arr2) {
    // 행렬의 크기가 많이 커지면 슈트라센 알고리즘을 이용할 수도 있음
    let answer = [];
    for(let i = 0; i < arr1.length; i++){
        let result = [];
        for(let j = 0; j < arr2[0].length; j++){
            let n = 0;
            for(let k = 0; k < arr2.length; k++){
                n += arr1[i][k] * arr2[k][j];
            }
            result.push(n);
        }
        answer.push(result);
    }
    return answer;
}