function solution(numlist, n) {
    return numlist.sort((num1, num2) => {
        if(Math.abs(num1 - n) === Math.abs(num2 - n)){
            if(num1 > num2){
                return -1;
            }
            else{
                return 1;
            }
        }
        else if(Math.abs(num1 - n) < Math.abs(num2 - n)){
            return -1;
        }
        else{
            return 1;
        }
    });
}