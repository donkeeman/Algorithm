function solution(priorities, location) {
    let answer = [];
    priorities.map((priority, i) => answer.push([i.toString(), priority]));
    let count = 0;
    while(true){
        let value = answer[0];
        if(answer.filter(arr => arr[1] > value[1]).length === 0){
            answer.shift();
            count++;
            if(location.toString() === value[0]){
                break;
            }
        }
        else{
            answer.push(answer.shift());
        }
    }
    return count;
}