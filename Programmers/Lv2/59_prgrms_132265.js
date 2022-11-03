function solution(topping) {
    // set을 이용하면 시간 초과
    let allToppings = {};
    topping.map(top => {
        if(allToppings[top]){
            allToppings[top]++;
        }
        else{
            allToppings[top] = 1;
        }
    })
    let answer = 0;
    let mine = [];
    let bro = Object.keys(allToppings).length;
    topping.map(top => {
        if(!mine.includes(top)){
            mine.push(top);
        }
        allToppings[top]--;
        if(allToppings[top] === 0){
            delete allToppings[top];
            bro--;
        }
        if (mine.length === bro){
            answer++;
        }
    })

    return answer;
}