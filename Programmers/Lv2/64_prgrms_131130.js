function solution(cards) {
    let answer = [];
    cards.unshift(0);
    const opened = Array(cards.length).fill(false);
    for(let i = 1; i<cards.length; i++){
        if(!opened[i]){
            getScore(i, 0);
        }
        if(answer.length === 0){
            return 0;
        }
    }
    answer = answer.sort((a, b) => b - a);
    return answer[0] * answer[1];
    
    function getScore(index, score){
        if(!opened[index]){
            opened[index] = true;
            getScore(cards[index], score + 1);
        }
        else{
            if(score !== cards.length - 1){
                answer.push(score);
            }
            return;
        }
    }
}