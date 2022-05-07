var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

// str1.concat(c, str2): str1 문자열 뒤에 c 문자를 붙이고 그 뒤에 str2 문자열을 붙임
var result = year.concat("/", month).concat("/", day)
.concat(" ", hour).concat(":", minute).concat(":", second);

console.log(result);