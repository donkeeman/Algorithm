function solution(p) {
    p = p.split("");
    return convertBrace(p);

    function convertBrace(braceArr) {
        if (braceArr.length === 0) {
            return "";
        }
        let u = [],
            v = [];
        for (let i = 2; i <= braceArr.length; i += 2) {
            if (
                braceArr.slice(0, i).filter((x) => x === "(")
                    .length ===
                braceArr.slice(0, i).filter((x) => x === ")").length
            ) {
                u = braceArr.slice(0, i);
                v = braceArr.slice(i);
                break;
            }
        }
        if (isCorrectBrace(u)) {
            return u.join("") + convertBrace(v);
        } else {
            return (
                "(" +
                convertBrace(v) +
                ")" +
                u.slice(1, -1)
                .map(x => x === "(" ? ")" : "(")
                .join("")
            );
        }
    }

    function isCorrectBrace(braceArr) {
        const stack = [];
        for (let i = 0; i < braceArr.length; i++) {
            if (
                braceArr[i] === ")" &&
                stack[stack.length - 1] === "("
            ) {
                stack.pop();
            } else {
                stack.push(braceArr[i]);
            }
        }
        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}