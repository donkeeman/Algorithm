function solution(spell, dic) {
    return dic.filter(word => word.split("").sort().join("") === spell.sort().join("")).length ? 1 : 2;
}