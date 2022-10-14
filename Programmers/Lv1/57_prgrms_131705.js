function solution(number) {
    let answer = 0;
    dfs(number, []);
    return answer;
    
    function dfs(number, arr){
        if(arr.length === 3){
            if(arr.reduce((a, b) => a + b, 0) === 0){
                answer++;
            }
            return;
        }
        for(let i = 0; i<number.length; i++){
            arr.push(number[i]);
            dfs(number.slice(i+1), arr);
            arr.pop();
        }
    }
}