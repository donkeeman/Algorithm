function solution(arr1, arr2) {
    let answer = [];
    for(let i in arr1){
        let arr = [];
        for(let j in arr1[i]){
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(arr);
    }
    return answer;
}