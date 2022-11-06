function solution(my_string) {
    const answer = my_string.match(/[^aeiou]/g);
    return answer ? answer.join("") : "";
}