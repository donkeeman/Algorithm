// 정방향으로 순회 & array 방법으로 풀기
// const comma = (n) => {
//     if(n < 1000)
//         return n;
//     n += "";
//     let n2 = n.split("");
//     for(let i = n.length % 3; i<=n.length; i+=4){
//         if(i === 0)
//             n2.splice(i, 0, "");
//         else
//             n2.splice(i, 0, ",");
//     }
//     return n2.join("");
// };

// 역방향으로 순회 & string 방법으로 풀기
const comma = (n) => {
    if(n < 1000)
        return n;
    n += "";
    for(let i = n.length-3; i > 0; i-=3){
        n = n.slice(0, i) + "," + n.slice(i);
    }
    return n;
}

console.log(comma(123456789));