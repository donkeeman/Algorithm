function solution(msg) {
    let dict = [];
    for (let i = 0; i < 26; i++) {
        dict.push(String.fromCharCode(i + 65));
    }
    let answer = [];
    let i = 0;
    while (i < msg.length) {
        let length = 0;
        let result;
        let startIndex = i;
        while (true) {
            let word = msg.slice(
                startIndex,
                startIndex + length + 1
            );
            if (dict.indexOf(word) !== -1) {
                result = dict.indexOf(word) + 1;
                length++;
            } else {
                i += length - 1;
                dict.push(word);
                break;
            }
            if (startIndex + length >= msg.length) {
                i = msg.length;
                break;
            }
        }
        answer.push(result);
        i++;
    }
    return answer;
}