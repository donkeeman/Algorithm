function solution(s) {
    if(s.match(/^(?=[0-9]*$)(?:.{4}|.{6})$/g)){
        return true;
    }
    else{
        return false;
    }
}