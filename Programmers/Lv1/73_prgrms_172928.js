function solution(park, routes) {
    let startX, startY;
    for(let i = 0; i<park.length; i++){
        if(park[i].indexOf("S") !== -1){
            startX = i;
            startY = park[i].indexOf("S");
            break;
        }
    }
    for(let i = 0; i<routes.length; i++){
        let [direction, distance] = routes[i].split(" ");
        distance = parseInt(distance);
        switch(direction){
            case "W":
                if(startY - distance >= 0){
                    let isBlock = false;
                    for(let j = startY; j>=startY - distance; j--){
                         if(park[startX][j] === "X"){
                             isBlock = true;
                             break;
                         }
                    }
                    if(!isBlock){
                        startY -= distance;
                    }
                }
                break;
            case "E": 
                if(startY + distance < park[0].length){
                    let isBlock = false;
                    for(let j = startY; j<=startY + distance; j++){
                         if(park[startX][j] === "X"){
                             isBlock = true;
                             break;
                         }
                    }
                    if(!isBlock){
                        startY += distance;
                    }
                }
                break;
            case "N":
                if(startX - distance >= 0){
                    let isBlock = false;
                    for(let j = startX; j>=startX - distance; j--){
                         if(park[j][startY] === "X"){
                             isBlock = true;
                             break;
                         }
                    }
                    if(!isBlock){
                        startX -= distance;
                    }
                }
                break;
            case "S": 
                if(startX + distance < park.length){
                    let isBlock = false;
                    for(let j = startX; j<=startX + distance; j++){
                         if(park[j][startY] === "X"){
                             isBlock = true;
                             break;
                         }
                    }
                    if(!isBlock){
                        startX += distance;
                    }
                }
                break;
        }
    }
    return [startX, startY];
}