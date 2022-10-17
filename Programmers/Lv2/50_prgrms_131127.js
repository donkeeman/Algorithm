function solution(want, number, discount) {
    let answer = 0;
    for(let i = 0; i<discount.length - 9; i++){
        let canRegister = true;
        let discountedArray = Array(number.length).fill(0);
        const discountPart = discount.slice(i, i + 10);
        for(let j = 0; j<discountPart.length; j++){
            discountedArray[want.indexOf(discountPart[j])]++;
        }
        for(let j = 0; j<number.length; j++){
            if(number[j] > discountedArray[j]){
                canRegister = false;
                break;
            }
        }
        if(canRegister){
            answer++;
        }
    }
    return answer;
}