function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    if(cacheSize === 0){
        return cities.length * 5;
    }
    cities.map(city => {
        city = city.toLowerCase();
        if(!cache.includes(city)){
            cache.push(city);
            if(cache.length > cacheSize){
                cache = cache.slice(1);
            }
            answer += 5;
        }
        else{
            answer += 1;
            let index = cache.indexOf(city);
            cache = cache.slice(0, index).concat(cache.slice(index + 1), cache[index]);
        }
    })
    return answer;
}