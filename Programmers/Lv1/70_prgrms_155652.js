// 수정한 풀이
function solution(s, skip, index) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".match(new RegExp(`[^${skip}]`, "g"));
    const length = alphabet.length;
    s = s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % length]);
    return s.join("");
}

// 처음에 풀었던 풀이
// function solution(s, skip, index) {
//     skip = skip.split("").map(n => n.charCodeAt());
//     s = s.split("").map(c => {
//         const alphabet = [];
//         c = (c.charCodeAt() + 1 - 97) % 26 + 97;
//         while(true){
//             if(!skip.includes(alphabet[index - 1]) && alphabet.length === index){
//                 break;
//             }
//             if(!skip.includes(c)){
//                 alphabet.push(c);
//             }
//             c = (c - 96) % 26 + 97;
//         }
//         return String.fromCharCode(alphabet[index - 1]);
//     });
//     return s.join("");
// }