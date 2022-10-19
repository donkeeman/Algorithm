
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
function solution(expression) {
    const answer = [];
    let operators = [
        ...new Set(expression.split(/[0-9]/).filter((x) => x)),
    ];
    const orderArr = [];
    getOrder(operators, []);

    for (let arr of orderArr) {
        let temp = expression;
        for (let i = 0; i < arr.length; i++) {
            const regex = new RegExp(
                "(\\(\\-[0-9]+\\)|[0-9]+)\\" +
                    arr[i] +
                    "(\\(\\-[0-9]+\\)|[0-9]+)"
            );
            while (true) {
                const exp = temp.match(regex);
                if (!exp) {
                    break;
                }
                const index = temp.indexOf(exp[0]);
                let evalValue = eval(exp[0]);
                if (evalValue < 0) {
                    evalValue = "(" + evalValue + ")";
                }
                temp = temp.slice(0, index)
                            .concat(
                                evalValue,
                                temp.slice(index + exp[0].length)
                            )
            }
        }
        temp = temp
            .split("")
            .filter((x) => !isNaN(x))
            .join("");
        answer.push(parseInt(temp));
    }
    return Math.max(...answer);

    function getOrder(op, arr) {
        if (arr.length === operators.length) {
            orderArr.push(arr);
            return;
        }
        for (let i = 0; i < op.length; i++) {
            getOrder(
                op.slice(0, i).concat(op.slice(i + 1)),
                arr.concat(op[i])
            );
        }
    }
}