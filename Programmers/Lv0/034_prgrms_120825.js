function solution(my_string, n) {
    return my_string.split("").map(c => c.repeat(n)).join("");
}