function solution(places) {
    let answer = Array(places.length).fill(1);
    for(let i = 0; i<places.length; i++){
        const arr = places[i];
        for(let x = 0; x<5; x++){
            for(let y = 0; y<5; y++){
                if(arr[x][y] === "X"){
                    continue;
                }
                const nearbyArr = [];
                if(x > 1){
                    nearbyArr.push(arr[x-1][y]);
                }
                if(x < 4){
                    nearbyArr.push(arr[x+1][y]);
                }
                if(y > 1){
                    nearbyArr.push(arr[x][y-1]);
                }
                if(y < 4){
                    nearbyArr.push(arr[x][y+1]);
                }
                // P의 상하좌우에 P가 하나라도 있으면 안 됨
                if(arr[x][y] === "P"){
                    if(nearbyArr.filter(v => v === "P").length > 0){
                        answer[i] = 0;
                        break;
                    }
                }
                // O의 상하좌우에 P가 2개 이상 있으면 안 됨
                else if(arr[x][y] === "O"){
                    if(nearbyArr.filter(v => v === "P").length > 1){
                        answer[i] = 0;
                        break;
                    }
                }
            }
            if(!answer[i]){
                break;
            }
        }
    }
    return answer;
}