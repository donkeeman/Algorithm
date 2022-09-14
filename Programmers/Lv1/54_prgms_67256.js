function getDistance(pointArr1, pointArr2){
    return Math.abs(pointArr1[0] - pointArr2[0]) + Math.abs(pointArr1[1] - pointArr2[1]);
}

function solution(numbers, hand) {
    let answer = '';
//     1 2 3
//     4 5 6
//     7 8 9
//     * 0 #
    let leftLocation = [3, 0]; 
    let rightLocation = [3, 2];
    numbers.map(num => {
        let currentIndex = num === 0 ? [3, 1] : [Math.ceil(num/3)-1, (num+2)%3];
        if(num % 3 === 1 && num > 0){
            answer += "L";
            leftLocation = currentIndex;
        }
        else if(num % 3 === 0  && num > 0){
            answer += "R";
            rightLocation = currentIndex;
        }
        else{
            const leftDistance = getDistance(currentIndex, leftLocation);
            const rightDistance = getDistance(currentIndex, rightLocation);
            
            if(leftDistance < rightDistance){
                answer += "L";
                leftLocation = currentIndex;
            }
            else if(leftDistance > rightDistance){
                answer += "R";
                rightLocation = currentIndex;
            }
            else{
                if(hand === "left"){
                    answer += "L";
                    leftLocation = currentIndex;
                }
                else{
                    answer += "R";
                    rightLocation = currentIndex;
                }
            }
        }
    })
    return answer;
}