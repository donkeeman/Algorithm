function solution(n, words) {
    let user = 0;
    let order = 0;
    let duplicateWords = [words[0]];
    for(let i = 1; i<words.length; i++){
        if(duplicateWords.includes(words[i]) || words[i].slice(0, 1) !== words[i-1].slice(-1)){
            user = i % n + 1;
            order = parseInt(i / n) + 1;
            break;
        }
        else{
            duplicateWords.push(words[i]);
        }
    }
    return [user, order];
}