function solution(today, terms, privacies) {
    const answer = [];
    const termMap = new Map();
    terms.forEach((termInfo) => {
        let [term, duration] = termInfo.split(" ");
        if(!termMap.has(term)){
            termMap.set(term, parseInt(duration));
        }
    });
    today = today.split(".").join("");
    privacies.forEach((info, index) => {
        let [date, term] = info.split(" ");
        let [year, month, day] = date.split(".").map(v => parseInt(v));
        day -= 1;
        if(day < 1){
            day = 28;
            month -= 1;
        }
        year += parseInt(termMap.get(term) / 12);
        month += termMap.get(term) % 12;
        if(month > 12){
            year += 1;
            month -= 12;
        }
        const limit = year + [month, day].map(v => ("0" + v).slice(-2)).join("");
        if(limit < today){
            answer.push(index + 1);
        }
    })
    return answer;
}