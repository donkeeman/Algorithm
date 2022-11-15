function solution(chicken) {
    let service = 0;
    while(chicken >= 10){
        service += parseInt(chicken / 10);
        chicken = parseInt(chicken / 10) + chicken % 10;
    }
    return service;
}