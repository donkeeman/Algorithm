function solution(wallpaper) {
    let xMin, xMax, yMin, yMax;
    xMin = yMin = 50;
    xMax = yMax = 0;
    for(let i = 0; i<wallpaper.length; i++){
        const firstIndex = wallpaper[i].indexOf("#");
        const lastIndex = wallpaper[i].lastIndexOf("#");
        if(firstIndex === -1 || lastIndex === -1){
            continue;
        }
        xMin = Math.min(i, xMin);
        xMax = Math.max(i, xMax);
        yMin = Math.min(firstIndex, yMin);
        yMax = Math.max(lastIndex, yMax);
    }
    return [xMin, yMin, xMax + 1, yMax + 1];
}