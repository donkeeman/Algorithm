function solution(s, n) {
    let answer = '';
    for(let c of s) {
        if(c >= "a" && c <= "z"){
            answer += String.fromCharCode((c.charCodeAt() - 97 + n) % 26 + 97);
        }
        else if(c >= "A" && c <= "Z"){
            answer += String.fromCharCode((c.charCodeAt() - 65 + n) % 26 + 65);
        }
        else{
            answer += c;
        } 
    }
    return answer;
}