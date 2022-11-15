function solution(polynomial) {
    polynomial = polynomial.split(" + ");
    const xSum = polynomial.filter(term => term.includes("x")).map(n => n === "x" ? 1 : parseInt(n)).reduce((a, b) => a + b, 0);
    const nSum = polynomial.filter(term => !term.includes("x")).map(n => parseInt(n)).reduce((a, b) => a + b, 0);
    if(!xSum){
        return nSum.toString();
    }
    else if(!nSum){
        return xSum === 1 ? "x" : xSum + "x";
    }
    else{
        return xSum === 1 ? "x + " + nSum : xSum + "x + " + nSum;
    }
}