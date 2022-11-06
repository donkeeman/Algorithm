function solution(my_string, letter) {
    const regex = new RegExp(letter, "g");
    return my_string.replace(regex, "");
}