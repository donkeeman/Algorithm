
function solution(maps) {
    const m = maps.length;
    const n = maps[0].length;
    // fill로 2차원 배열을 만들면 원소 한 개의 값을 변경할 때 행 전체 또는 열 전체가 바뀌는 문제가 있음
    // let visited = Array(m).fill(Array(n).fill(0));
    let distance = Array.from(Array(m), () => Array(n).fill(0));
    distance[0][0] = 1;
    const queue = [[0, 0]];
    while (queue.length > 0) {
        const index = queue.shift();
        const x = index[0];
        const y = index[1];
        if (
            x > 0 &&
            maps[x - 1][y] !== 0 &&
            distance[x - 1][y] === 0
        ) {
            queue.push([x - 1, y]);
            distance[x - 1][y] = distance[x][y] + 1;
        }
        if (
            x < m - 1 &&
            maps[x + 1][y] !== 0 &&
            distance[x + 1][y] === 0
        ) {
            queue.push([x + 1, y]);
            distance[x + 1][y] = distance[x][y] + 1;
        }
        if (
            y > 0 &&
            maps[x][y - 1] !== 0 &&
            distance[x][y - 1] === 0
        ) {
            queue.push([x, y - 1]);
            distance[x][y - 1] = distance[x][y] + 1;
        }
        if (
            y < n - 1 &&
            maps[x][y + 1] !== 0 &&
            distance[x][y + 1] === 0
        ) {
            queue.push([x, y + 1]);
            distance[x][y + 1] = distance[x][y] + 1;
        }
    }
    return distance[m - 1][n - 1] === 0 ? -1 : distance[m - 1][n - 1];
}