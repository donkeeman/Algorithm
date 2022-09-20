function solution(str1, str2) {
    let set1 = makeSet(str1.toUpperCase());
    let set2 = makeSet(str2.toUpperCase());
    let answer = {};
    for(let elem of set1){
        if(answer[elem]){
            answer[elem][0]++;
        }
        else{
            answer[elem] = [1, 0];
        }
    }
    for(let elem of set2){
        if(answer[elem]){
            answer[elem][1]++;
        }
        else{
            answer[elem] = [0, 1];
        }
    }
    console.log(answer)
    
    let diff = [], union = [];
    Object.entries(answer).map(([word, countArr]) => {
        for(let i = 0; i<Math.min(...countArr); i++){
            diff.push(word);
        }
        for(let i = 0; i<Math.max(...countArr); i++){
            union.push(word);
        }
    })
    if(union.length === 0){
        return 65536;
    }
    else{
        return Math.floor(diff.length / union.length * 65536);
    }
}

function makeSet(str){
    const REGEX = new RegExp(/[A-Z]{2}/);
    let set = [];
    for(let i = 0; i<str.length-1; i++){
        let word = str.slice(i, i+2);
        if(REGEX.test(word)){
            set.push(word);
        }
    }
    return set;
}