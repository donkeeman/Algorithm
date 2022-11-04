function solution(orders, course) {
    let answer = [];
    let orderMap = new Map();
    
    for(let i = 0; i<orders.length; i++){
        for(let j = i + 1; j<orders.length; j++){
            // 두 주문을 합쳐서 두 글자 이상인 것(=겹치는 주문)을 골라냄
            const orderResult = (orders[i]+orders[j]).split("").sort().join("").match(/(\w)\1+/g);
            if(!orderResult){
                continue;
            }
            const orderCombination = orderResult.map(order => order[0]).join("");
            // 겹치는 주문의 부분도 맵에 넣어야 하므로 순열
            permutation(orderCombination.split(""), "", 0, orderCombination.length);
        }
    }
    // 같은 글자수인 메뉴 중에서 주문이 많이 된 것만 골라야 함
    filterOrder(orderMap);
    return answer.sort();
    
    function permutation(strArr, result, count, length) {
        if (count > length) {
            return;
        }
        if(result.length > 1){
            orderMap.set(result, orderMap.get(result) ? orderMap.get(result) + 1 : 1);
        }
        for (let i = 0; i < strArr.length; i++) {
            permutation(
                strArr.slice(i+1),
                result + strArr[i],
                count + 1,
                length,
            );
        }
    }
    
    function filterOrder(orderMap){
        course.map(length => {
            let filteredArr = [];
            let maxCount = 0;
            const lengthArr = Array.from(orderMap.keys()).filter(order => order.length === length);
            lengthArr.map(order => {
                if(orderMap.get(order) > maxCount){
                    filteredArr = [order];
                    maxCount = orderMap.get(order);
                }
                else if(orderMap.get(order) === maxCount){
                    filteredArr.push(order);
                }
            })
            answer.push(...filteredArr);
        })
    }
}