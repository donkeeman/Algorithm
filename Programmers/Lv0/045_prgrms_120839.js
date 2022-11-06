function solution(rsp) {
    const rspMap = new Map();
    rspMap.set("2", "0");
    rspMap.set("0", "5");
    rspMap.set("5", "2");
    return rsp.split("").map(x => rspMap.get(x)).join("");
}