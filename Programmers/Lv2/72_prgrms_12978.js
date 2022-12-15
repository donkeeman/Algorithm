function solution(N, road, K) {
    // 나중에 bfs로 풀어보기
    let visited = Array(N + 1).fill(500001);
    const answer = new Set();
    findPath(1, 0);
    return answer.size;
    
    function findPath(start, distance) {
        if (distance > K) {
            return;
        } else {
            answer.add(start);
        }
        
        for (let i = 0; i < road.length; i++) {
            const [startN, endN, dis] = road[i];
            if(start !== startN && start !== endN){
                continue;
            }
            if (start === startN) {
                if(visited[endN] > distance + dis){
                    visited[endN] = distance + dis;
                    findPath(endN, distance + dis);
                }
            } else if (start === endN) {
                if(visited[startN] > distance + dis){
                    visited[startN] = distance + dis;
                    findPath(startN, distance + dis);
                }
            }
        }
   }
}