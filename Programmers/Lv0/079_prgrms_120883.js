function solution(id_pw, db) {
    const answer = new Map();
    db.forEach(([id, pw]) => {
        answer.set(id, pw)
    });
    if(!answer.has(id_pw[0])){
        return "fail";
    }
    else if(answer.get(id_pw[0]) === id_pw[1]){
        return "login";
    }
    else{
        return "wrong pw";
    }
}