function solution(lottos, win_nums) {
    const maxPossible = lottos.filter(x => x === 0 || win_nums.includes(x));
    const minPossible = maxPossible.filter(x => x !== 0);
    return [7 - maxPossible.length > 6 ? 6 : 7 - maxPossible.length, 7 - minPossible.length > 6 ? 6 : 7 - minPossible.length];
}