function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i<n; i++){
        let elem = (arr1[i]|arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ");
        if(elem.length < n){
            while(elem.length !== n){
                elem = " " + elem;
            }
        }
        answer.push(elem);
    }
    return answer;
}