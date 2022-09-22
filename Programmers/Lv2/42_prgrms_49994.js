function solution(dirs) {
    let answer = [];
    let startX, startY, endX = 0, endY = 0;
    dirs.split("").forEach(direction => {
        startX = endX;
        startY = endY;
        if(direction === "L"){
            endX--;
            if(endX < -5){
                endX = -5;
            }
        }
        else if(direction === "R"){
            endX++;
            if(endX > 5){
                endX = 5;
            }
        }
        else if(direction === "U"){
            endY++;
            if(endY > 5){
                endY = 5;
            }
        }
        else if(direction === "D"){
            endY--;
            if(endY < -5){
                endY = -5;
            }
        }
        if(!(answer.includes(""+startX+startY+endX+endY)
            || answer.includes(""+endX+endY+startX+startY))
           && !(startX === endX && startY === endY)){
            answer.push(""+startX+startY+endX+endY);
        }
    })
    return answer.length;
}