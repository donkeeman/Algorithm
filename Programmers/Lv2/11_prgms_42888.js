function solution(record) {
    let answer = [];
    let userInfo = new Map();
    record.map(recordArr => recordArr.split(" ")).map(recordArr => {
        if(recordArr[0] === "Change"){
            userInfo.set(recordArr[1], recordArr[2]);
        }
        else if(recordArr[0] === "Enter"){
            userInfo.set(recordArr[1], recordArr[2]);
            answer.push([recordArr[1], "님이 들어왔습니다."]);
        }
        else{
            answer.push([recordArr[1], "님이 나갔습니다."]);
        }
    });
    return answer.map(answerArr => {
        answerArr[0] = userInfo.get(answerArr[0]);
        return answerArr.join("");
    });
}