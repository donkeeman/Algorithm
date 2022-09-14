function solution(numbers, target) {
    let answer = 0;
    dfs(numbers, 0, 0);
    return answer;
    
    function dfs(arr, sum, index){
        if(index === arr.length){
            if(target === sum){
                answer++;
            }
            return;
        }
        dfs(arr, sum + arr[index], index+1);
        dfs(arr, sum - arr[index], index+1);
    }
}

