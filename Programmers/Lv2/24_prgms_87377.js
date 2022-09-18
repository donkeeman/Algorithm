function solution(line) {
    let answer = [];
    for(let i = 0; i<line.length - 1; i++){
        if(!line[i][2]){
            line[i][2] = 0;
        }
        for(let j = i; j<line.length; j++){
            let n = line[i][0] * line[j][1] - line[i][1] * line[j][0];
            if(n === 0){
                continue;
            }
            if(!line[j][2]){
                line[j][2] = 0;
            }
            let x = (line[i][1] * line[j][2] - line[i][2] * line[j][1]) / n;
            let y = (line[i][2] * line[j][0] - line[i][0] * line[j][2]) / n;
            if(Number.isInteger(x) && Number.isInteger(y)){
                answer.push([x, y]);
            }
        }
    }
    let minX, maxX;
    minX = maxX = answer[0][0];
    let minY, maxY;
    minY = maxY = answer[0][1];
    for(let i = 1; i<answer.length; i++) {
        if(answer[i][0] > maxX){
            maxX = answer[i][0];
        }
        else if(answer[i][0] < minX){
            minX = answer[i][0];
        }
        if(answer[i][1] > maxY){
            maxY = answer[i][1];
        }
        else if(answer[i][1] < minY){
            minY = answer[i][1];
        }
    }
    let result = [];
    for(let i = maxY; i >= minY; i--){
        let str = "";
        for(let j = minX; j <= maxX; j++){
            if(findPoint(answer, j, i)){
                str += "*";
            }
            else{
                str += ".";
            }
        }
        result.push(str);
    }
    return result;
}

function findPoint(arr, i, j){
    for(let n = 0; n < arr.length; n++){
        if(arr[n][0] === i && arr[n][1] === j){
            return true;
        }
    }
    return false;
}