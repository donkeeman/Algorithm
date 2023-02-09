function solution(s, skip, index) {
    skip = skip.split("").map(n => n.charCodeAt());
    s = s.split("").map(c => {
        const alphabet = [];
        c = (c.charCodeAt() + 1 - 97) % 26 + 97;
        while(true){
            if(!skip.includes(alphabet[index - 1]) && alphabet.length === index){
                break;
            }
            if(!skip.includes(c)){
                alphabet.push(c);
            }
            c = (c - 96) % 26 + 97;
        }
        return String.fromCharCode(alphabet[index - 1]);
    });
    return s.join("");
}