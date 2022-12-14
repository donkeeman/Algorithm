function solution(n) {
    switch(n % 2){
        case 1:
            return 0;
        case 0:
            switch(n){
                // n = 2일 때 3가지
                case 2:
                    return 3;
                // n = 4일 때 11가지
                case 4:
                    return 11;
                default:
                    let [prev1, prev2, answer] = [BigInt(3), BigInt(11), BigInt(0)];
                    for(let i = 6; i<=n; i+=2){
                        answer = BigInt(4) * prev2 - prev1;
                        prev1 = prev2;
                        prev2 = answer;
                    }
                    return answer % BigInt(1000000007);    
            }
    }
}