function solution(n) {
    let answer = 0;
//     시간 초과
//     jump(n);
    
//     function jump(n){
//         if(n === 0){
//             answer++;
//             return;
//         }
//         else if(n < 0){
//             return;
//         }
//         dfs(n - 1);
//         dfs(n - 2);
//     }
    
    return jump(n) % 1234567n;
}


// 알고보니 피보나치와 같다...
function jump(n){
    if(n === 1){
        return BigInt(1);
    }
    let arr = [1, 1];
    for(let i = 2; i<n+1; i++){
        arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
    }
    return arr[n];
}
