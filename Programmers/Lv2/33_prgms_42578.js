function solution(clothes) {
    let answer = {};
    clothes.map(cloth => {
        if(answer[cloth[1]]){
            answer[cloth[1]].push(cloth[0]); 
        }
        else{
            answer[cloth[1]] = [cloth[0]];
        }
    })
    return Object.values(answer).map(arr => arr.length + 1).reduce((a, b) => a * b, 1) - 1;
}