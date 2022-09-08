function solution(new_id) {
    const regex = /[a-z0-9-_\.]*/g;
    let answer = new_id.toLowerCase().match(regex).join("").replace(/\.+/g, ".")
                        .replace(/^\./g, "").replace(/\.$/g, "");
    
    if(!answer){
        answer = "a";
    }
    if(answer.length >= 16){
        answer = answer.slice(0, 15).replace(/\.$/g, "");
    }
    if(answer.length <= 2){
        const lastChar = answer.slice(-1);
        while(answer.length !== 3){
            answer += lastChar;
        }
    }
    // console.log(answer)
    return answer;
}