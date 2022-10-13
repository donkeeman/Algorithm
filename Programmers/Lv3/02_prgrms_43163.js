function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    let answer = [];
    dfs(words, 0, begin);
    return answer.sort()[0];

    function dfs(words, count, begin) {
        if (words.length === 0 || begin === target) {
            answer.push(count);
            return;
        }
        for (let i = 0; i < words.length; i++) {
            const compareWord = words[i];
            if (compareWord.length !== begin.length) {
                continue;
            }
            if (
                begin
                    .split("")
                    .filter((x, index) => x === compareWord[index])
                    .length ===
                begin.length - 1
            ) {
                dfs(
                    words.slice(0, i).concat(words.slice(i + 1)),
                    count + 1,
                    compareWord
                );
            }
        }
    }
}