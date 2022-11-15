function solution(dots) {
    const lines = [];
    for(let i = 0; i<dots.length - 1; i++){
        for(let j = i + 1; j<dots.length; j++){
            lines.push([dots[j][0] - dots[i][0], dots[j][1] - dots[i][1]]);
        }
    }
    for(let i = 0; i<lines.length - 1; i++){
        for(let j = i + 1; j<lines.length; j++){
            if(lines[j][1] / lines[j][0] === lines[i][1] / lines[i][0]){
                return 1;
            }
        }
    }
    return 0;
}