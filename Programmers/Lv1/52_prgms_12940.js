function solution(n, m) {
    if(m%n === 0){
        return [n, m];
    }
    else{
        let index = n * m;
        while(true){
            if(n % index === 0 && m % index === 0){
                return [index, n * m / index];
            }
            else if(index <= 1){
                return [1, n * m];
            }
            index--;
        }
    }
}