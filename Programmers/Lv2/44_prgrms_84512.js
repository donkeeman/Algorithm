function solution(word) {
    const dict = {
        0:"A",
        1:"E",
        2:"I",
        3:"O",
        4:"U",
    }
    let visited = Array(5).fill(Array(6).fill(false));
    let answer = new Set();
    dfs(0, [], 0);
    return Array.from(answer).indexOf(word);
    
    function dfs(index, arr, count){
        if(index > 5){
            return;
        }
        for(let i = 0; i<5; i++){
            if(!visited[i][index]){
                visited[i][index] = true;
                answer.add(arr.join(""));
                dfs(index+1, arr.concat(dict[i]), count+1);
                visited[i][index] = false;
            }
        }

    }
}

