function getTime(start, end){
    const startTime = parseInt(start.split(":")[0])*60 + parseInt(start.split(":")[1]);
    const endTime = parseInt(end.split(":")[0])*60 + parseInt(end.split(":")[1]);
    return endTime - startTime;
}

function solution(fees, records) {
    let answer = {};
    const baseTime = fees[0];
    const baseFee = fees[1];
    const unitTime = fees[2];
    const unitFee = fees[3];
    
    records.map(record => {
        const parkTime = record.split(" ")[0];
        const carNumber = parseInt(record.split(" ")[1]);
        if(!answer[carNumber]){
            answer[carNumber] = [];
        }
        answer[carNumber].push(parkTime);
    })
    
    let timeArray = [];
    Object.values(answer).sort((a, b) => a - b > 0).map(times => {
        let totalTime = 0;
        while(times.length !== 0){
           if(times.length === 1){
                totalTime += getTime(times.shift(), "23:59");
            }
            else{
                totalTime += getTime(times.shift(), times.shift());
            }
        }
        if(totalTime > baseTime){
            timeArray.push(baseFee + Math.ceil((totalTime - baseTime)/unitTime)*unitFee);
        }
        else{
            timeArray.push(baseFee);
        }
    });
    return timeArray;
}