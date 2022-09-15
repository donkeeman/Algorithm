function solution(s) {
    s = s.split(" ").map(word => {
        let jadenWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        return jadenWord;
    });
    return s.join(" ");
}