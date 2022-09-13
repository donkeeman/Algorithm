function solution(answers) {
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let count = Array(3).fill(0);

    for(let i in answers){
        if(answer1[i%5] === answers[i]){
            count[0]++;
        }
        if(answer2[i%8] === answers[i]){
            count[1]++;
        }
        if(answer3[i%10] === answers[i]){
            count[2]++;
        }
    }
    const max = Math.max(...count);
    let answer = [];
    count.map((v, i) => {
        if(max === v){
            answer.push(i+1);
        }
    });
    return answer;
}