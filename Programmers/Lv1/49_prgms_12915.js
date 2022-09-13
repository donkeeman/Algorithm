function solution(strings, n) {
    return strings.sort((a, b) => {
        if(a[n] === b[n]){
            if(a < b){
                return -1;
            }
            else{
                return 1;
            }
        }
        else if(a.slice(n, a.length) < b.slice(n, b.length)){
            return -1;
        }
        else{
            return 1;
        }
    });
}