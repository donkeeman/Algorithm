function solution(n, t, m, p) {
    let answer = [];
    let nums = [];
    let index = 0;
    while(nums.length < t * m){
        nums.push(...index.toString(n).toUpperCase().split(""));
        index++;
    }
    for(let i = p-1; i<nums.length; i+=m){
        answer.push(nums[i]);
        if(answer.length >= t){
            break;
        }
    }
    return answer.join("");
}