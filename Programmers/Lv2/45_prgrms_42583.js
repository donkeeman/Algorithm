function solution(bridge_length, weight, truck_weights) {
    // 1대 당 weight초 걸림
    let answer = 0;
    let onBridge = {};
    let index = 0;
    let count = 0;
    let sum = 0;
    while (index < truck_weights.length) {
        // 현재 다리 위에 있는 트럭의 카운트(초)를 1씩 증가시키고, 카운트가 다리의 길이를 넘어가면 통과한 것으로 간주하고 onBridge에서 제거 후 passed에 넣기
        Object.keys(onBridge).map((truckIndex) => {
            onBridge[truckIndex]++;
            if (onBridge[truckIndex] > bridge_length) {
                // 객체에서 요소 삭제하는 법
                delete onBridge[truckIndex];
                sum -= truck_weights[parseInt(truckIndex)];
            }
        });
        // 현재 다리 위에 있는 트럭의 무게 + 새로 들어갈 트럭의 무게 > 다리의 무게이면 트럭 안 넣음
        if (
            sum + truck_weights[index] <= weight &&
            Object.keys(onBridge).length < bridge_length
        ) {
            onBridge[index] = 1;
            sum += truck_weights[index];
            index++;
        }
        count++;
    }
    // onBridge에는 마지막 한 대 있으므로 다리 길이를 더해줌
    return count + bridge_length;
}
