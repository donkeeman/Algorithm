function solution(array, n) {
    return array.sort((a, b) => {
        if(Math.abs(a - n) === (Math.abs(b - n))){
            if(a < b){
                return -1;
            }
            else{
                return 1;
            }
        }
        else if(Math.abs(a - n) < (Math.abs(b - n))){
            return -1;
        }
        else{
            return 1;
        }
    })[0];
}