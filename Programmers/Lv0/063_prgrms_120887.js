function solution(i, j, k) {
    let numStr = "";
    for(let n = i; n < j + 1; n++){
        numStr += n;
    }
    return numStr.split("").filter(x => parseInt(x) === k).length;
}