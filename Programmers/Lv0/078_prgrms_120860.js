function solution(dots) {
    let [w, h] = [0, 0];
    for(let i = 1; i<dots.length; i++){
        w = Math.max(w, Math.abs(dots[0][0] - dots[i][0]));
        h = Math.max(h, Math.abs(dots[0][1] - dots[i][1]));
    }
    return w * h;
}