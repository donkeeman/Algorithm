function solution(sides) {
    sides = sides.sort((a, b) => {
        if(a - b > 0){
            return -1;
        }
        else{
            return 1;
        }
    })
    return sides[0] < sides[1] + sides[2] ? 1 : 2;
}