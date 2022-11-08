function solution(my_string) {
    const numArray = my_string.match(/[0-9]{1,}/g);
    if(!numArray){
        return 0;
    }
    else{
        return numArray.reduce((a, b) => a + parseInt(b), 0);
    }
}