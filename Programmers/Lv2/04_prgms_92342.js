function solution(n, info) {
    let answer = Array(11).fill(0);
    let maxGap = 0;
    getResult(0, 0, 0, 0, answer);
    if (maxGap <= 0) {
        answer = [-1];
    }
    return answer;

    // 낮은 점수부터 채우는 방법
    // 어피치 점수, 라이언 점수, 화살 수, 인덱스, 점수 저장할 배열
    function getResult(apeachScore, ryanScore, arrows, index, scores) {
        // 화살 수가 n보다 커지면 리턴
        if (arrows > n) {
            return;
        }
        // index가 10을 넘어가면 모두 0~10점까지 모두 채워진 것
        if (index > 10) {
            let gap = ryanScore - apeachScore;
            // 점수차가 갱신되면
            if (gap > maxGap) {
                // 남은 화살은 0점에
                scores[10] = n - arrows;
                maxGap = gap;
                answer = scores;
            }
            return;
        }
        // 화살 수가 n보다 적을 경우
        // 라이언은 어피치가 쏜 화살보다 1개 더 쏨
        if (arrows < n) {
            let currentScores = [...scores];
            currentScores[10 - index] = info[10 - index] + 1;
            // 채운 과녁만큼 라이언의 점수로 들어감
            getResult(
                apeachScore,
                ryanScore + index,
                arrows + info[10 - index] + 1,
                index + 1,
                currentScores
            );
        }
        // 어피치의 화살 수가 0개인 과녁은 어피치의 점수로 들어감
        if (info[10 - index] > 0) {
            getResult(
                apeachScore + index,
                ryanScore,
                arrows,
                index + 1,
                scores
            );
        } else {
            getResult(apeachScore, ryanScore, arrows, index + 1, scores);
        }
    }
}
