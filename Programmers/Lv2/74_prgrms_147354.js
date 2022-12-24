function solution(data, col, row_begin, row_end) {
    data.sort((row1, row2) => {
        if(row1[col - 1] < row2[col - 1]){
            return -1;
        }
        else if(row1[col - 1] > row2[col - 1]){
            return 1;
        }
        else{
            if(row1[0] < row2[0]){
                return 1;
            }
            else{
                return -1;
            }
        }
    });
    const answer = [];
    for(let i = row_begin - 1; i<row_end; i++) {
        answer.push(data[i].reduce((a, c) => a + c % (i + 1), 0));
    }
    return answer.reduce((a, c) => a ^ c, 0);
}