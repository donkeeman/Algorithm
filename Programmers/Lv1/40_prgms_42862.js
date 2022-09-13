function solution(n, lost, reserve) {
    let newLost = lost.filter(x => !reserve.includes(x)).sort((a, b) => a - b);
    reserve = reserve.filter(x => !lost.includes(x)).sort((a, b) => a - b);
    reserve.map(x => {
            if(newLost.includes(x-1)){
                newLost.shift();
            }
            else if(newLost.includes(x+1)){
                newLost.shift();
            }
    });
    return n - newLost.length;
}