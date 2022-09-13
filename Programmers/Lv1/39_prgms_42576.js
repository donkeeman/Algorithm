function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i in participant){
        if(completion[i] !== participant[i]){
            return participant[i];
        }
    }
}