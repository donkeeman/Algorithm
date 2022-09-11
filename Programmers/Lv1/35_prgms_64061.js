function checkDuplicate(arr){
    let count = 0;
    while(true){
        let isDuplicate = false;
        for(let i = 0; i<arr.length; i++){
            if(arr[i] === arr[i+1]){
                arr.splice(i, 2);
                isDuplicate = true;
                count++;
            }
        }
        if(!isDuplicate){
            break;
        }
    }
    return count<<1;
}

function solution(board, moves) {
    let result = [];
    moves.map(move => {
        for(let i = 0; i<board.length; i++){
            if(board[i][move-1] !== 0){
                result.push(board[i][move-1]);
                board[i][move-1] = 0;
                break;
            }
        } 
    })
    
    let answer = checkDuplicate(result);
    return answer;
}
