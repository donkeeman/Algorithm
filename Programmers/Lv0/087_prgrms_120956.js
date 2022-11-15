function solution(babbling) {
    return babbling.filter(b => b.replace(/aya|ye|woo|ma/g, "") === "").length;
}