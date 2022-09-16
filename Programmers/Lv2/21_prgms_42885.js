function solution(people, limit) {
    let answer = people.length;
    let firstIndex = 0;
    let secondIndex = people.length - 1;
    people = people.sort((a, b) => a - b);
    // 제한을 넘지 않는 선에서 가장 무거운 사람과 가장 가벼운 사람을 같이 태워야 최대한 보트 수를 줄일 수 있음
    // shift, unshift, push, pop 등 배열을 직접 건드리는 메서드는 효율성에서 좋지 않은 듯
    // 인덱스를 이용해야 효율성 통과
    while(firstIndex < secondIndex){
        if(people[firstIndex] + people[secondIndex] <= limit){
            answer--;
            firstIndex++;
            secondIndex--;
        }
        else{
            secondIndex--;
        }
    }
    return answer;
}