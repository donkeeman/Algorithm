function solution(s) {
    s = s.split(" ").map(str => {
        return str.split("").map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join("")
    }).join(" ");
    return s;
}