function solution(tickets) {
    tickets = tickets.sort((a, b) => {
        if (a[0] === "ICN") {
            if (a[1][0] - b[1][0]) {
                return 1;
            } else {
                return -1;
            }
        }
        return 0;
    });
    let answer = [];
    permutation(tickets, ["ICN"]);
    return answer.sort()[0];

    function permutation(ticketArr, answerArr) {
        if (ticketArr.length > 0) {
           ticketArr.map((ticket, index) => {
                if (ticket[0] === answerArr[answerArr.length - 1]) {
                    permutation(ticketArr.slice(0, index).concat(ticketArr.slice(index + 1)), answerArr.concat(ticket[1]));
                }
            })
        }
        else{
            answer.push(answerArr);
            return;
        }
    }
}