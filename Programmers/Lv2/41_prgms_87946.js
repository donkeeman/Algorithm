function solution(k, dungeons) {
    // 방문 여부 표시하는 배열
    let visited = Array(dungeons.length).fill(false);
    let answer = [];
    permutation(dungeons, k, 0, 0);
    return Math.max(...answer);
    
    // 순서가 중요한 n개를 뽑는 것이므로 순열 완전 탐색 풀이
    function permutation(dungeons, k, count, index){
        if(index >= dungeons.length){
            answer.push(count);
            return;
        }
        
        for(let i = 0; i<dungeons.length; i++){
            // 방문 안 했을 때
            if(!visited[i]){
                visited[i] = true;
                // 최소 필요 피로도가 충분하다면 던전 감
                if(k >= dungeons[i][0]){
                    permutation(dungeons, k - dungeons[i][1], count + 1, index + 1);
                }
                // 없으면 안 감
                else{
                    permutation(dungeons, k, count, index + 1);
                }
                // 다음 순회 때문에 갔다 와서 다시 false로 바꿔 주어야 함
                visited[i] = false;
            }
        }
    }
}