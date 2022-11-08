function solution(keyinput, board) {
    const directionMap = new Map();
    directionMap.set("left", {x :-1, y: 0});
    directionMap.set("right", {x :1, y: 0});
    directionMap.set("up", {x :0, y: 1});
    directionMap.set("down", {x :0, y: -1});
    
    const [maxX, maxY] = [parseInt(board[0] / 2), parseInt(board[1] / 2)];
    let [x, y] = [0, 0];
    for(let direction of keyinput) {
        x += directionMap.get(direction).x;
        y += directionMap.get(direction).y;
        x = x < -maxX ? -maxX : x > maxX ? maxX : x;
        y = y < -maxY ? -maxY : y > maxY ? maxY : y;
    }
    return [x, y];
}