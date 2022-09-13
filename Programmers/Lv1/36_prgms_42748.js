function solution(array, commands) {
    let answer = [];
    commands.map(command => {
        let temp = array.slice(command[0]-1, command[1]).sort((a, b) => a - b)[command[2]-1];
        answer.push(temp);
    });
    return answer;
}