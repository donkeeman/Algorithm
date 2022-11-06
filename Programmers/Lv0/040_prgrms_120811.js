function solution(array) {
    return array.sort((a, b) => {
        if(a - b > 0){
            return -1;
        }
        else{
            return 1;
        }
    })[parseInt(array.length / 2)];
}