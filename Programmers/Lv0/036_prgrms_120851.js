function solution(my_string) {
    return my_string.match(/[0-9]/g).reduce((a, b) => a + parseInt(b), 0);
}