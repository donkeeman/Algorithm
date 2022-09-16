function solution(s)
{
    let result = false;
    s = s.split("");
    // 시간 초과
    // while(s.length !== 0){
    //     result = false;
    //     for(let i = 0; i<s.length-1; i++){
    //         if(s[i] === s[i+1]){
    //             s.splice(i, 2);
    //             result = true;
    //             break;
    //         }
    //     }
    //     if(!result){
    //         return 0;
    //     }
    // }
    // return 1;
    
    // 시간 절약을 위해서는 스택으로 풀어야 함
    let stack = [s[0]];
    for(let i = 1; i<s.length; i++){
        if(s[i] === arr[arr.length - 1]){
            arr.pop();
        }
        else{
            arr.push(s[i]);
        }
    }
    if(arr.length === 0){
        return 1;
    }
    else{
        return 0;
    }
}