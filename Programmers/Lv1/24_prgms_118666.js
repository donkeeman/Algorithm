function solution(survey, choices) {
    let answer = ["RT" , "CF" , "JM" , "AN"];
    let scoreArray = [0, 0, 0, 0];
    for(let i in survey){
        switch (survey[i]){
            case "RT":
                scoreArray[0] += choices[i] - 4;
                break;
            case "TR":
                scoreArray[0] += 4 - choices[i];
                break;
            case "CF":
                scoreArray[1] += choices[i] - 4;
                break;
            case "FC":
                scoreArray[1] += 4 - choices[i];
                break;
            case "JM":
                scoreArray[2] += choices[i] - 4;
                break;
            case "MJ":
                scoreArray[2] += 4 - choices[i];
                break;
            case "AN":
                scoreArray[3] += choices[i] - 4;
                break;
            case "NA":
                scoreArray[3] += 4 - choices[i];
                break;
        }
    }
    scoreArray.map((score, i) => {
        answer[i] = score > 0 ? answer[i][1] : answer[i][0];
    })
    return answer.join("");
}