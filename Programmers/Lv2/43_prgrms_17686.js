function solution(files) {
    return files.sort((a, b) => {
        let numberA = a.match(/[0-9]{1,5}/g)[0].slice(0, 5);
        let numberB = b.match(/[0-9]{1,5}/g)[0].slice(0, 5);
        let headA = a.slice(0, a.indexOf(numberA)).toLowerCase();
        let headB = b.slice(0, b.indexOf(numberB)).toLowerCase();
        if(headA > headB){
            return 1;
        }
        else if(headA < headB){
            return -1;
        }
        else{
            numberA = parseInt(numberA);
            numberB = parseInt(numberB);
            if(numberA > numberB){
                return 1;
            }
            else if(numberA < numberB){
                return -1;
            }
            else{
                return 0;
            }
        }
    })
}