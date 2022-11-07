function solution(order) {
    return order.toString().split("").filter(x => ["3", "6", "9"].includes(x)).length;
}