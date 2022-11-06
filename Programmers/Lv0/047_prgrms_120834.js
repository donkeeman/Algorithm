function solution(age) {
    return age.toString().split("").map(x => String.fromCharCode(parseInt(x) + 97)).join("");
}