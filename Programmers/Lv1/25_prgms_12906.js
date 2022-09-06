function solution(arr)
{
    let answer = [];
    let currentNum = null;
    arr.map(n => {
        if(currentNum !== n){
            currentNum = n;
            answer.push(n);
        }
    })
    return answer;
}