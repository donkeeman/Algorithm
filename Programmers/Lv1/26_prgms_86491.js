function solution(sizes) {
    let large = [];
    let small = [];
    sizes.map(size => {
        large.push(Math.max(...size));
        small.push(Math.min(...size));
    });
    return Math.max(...large) * Math.max(...small);
}