function solution(name) {
    const answer = [];
    const charCodeArr = name
        .split("")
        .map((c) =>
            Math.min(c.charCodeAt(0) - 65, 91 - c.charCodeAt(0))
        );
    let visitedArr = charCodeArr.map((n) => (n ? false : true));
    moveIndex(0, 0, visitedArr, [0]);
    return Math.min(...answer);

    function moveIndex(startIndex, count, visited, indexOrderArr) {
        let newVisited = visited.slice();
        count += charCodeArr[startIndex];
        newVisited[startIndex] = true;
        const leftIndex = newVisited.lastIndexOf(false);
        const rightIndex = newVisited.indexOf(false);
        if (leftIndex === -1 || rightIndex === -1) {
            answer.push(count);
            return;
        }
        const leftGap =
            startIndex < leftIndex
                ? startIndex - leftIndex + charCodeArr.length
                : startIndex - leftIndex;
        const rightGap =
            startIndex > rightIndex
                ? rightIndex - startIndex + charCodeArr.length
                : rightIndex - startIndex;
        moveIndex(
            leftIndex,
            count + leftGap,
            newVisited,
            indexOrderArr.concat(leftIndex)
        );
        moveIndex(
            rightIndex,
            count + rightGap,
            newVisited,
            indexOrderArr.concat(rightIndex)
        );
    }
}