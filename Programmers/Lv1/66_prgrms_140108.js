function solution(s) {
    let answer = 0;
    while(s.length !== 0){
        let cutIndex = 0;
        const character = s[0];
        let diff = 1;
        for(let i = 1; i<s.length; i++){
            if(s[i] === character){
                diff++;
            }
            else{
                diff--;
            }
            if(diff === 0 || i === s.length - 1){
                cutIndex = i;
                break;
            }
        }
        answer++;
        s = s.slice(cutIndex + 1);
    }
    return answer;
}