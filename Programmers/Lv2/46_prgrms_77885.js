function solution(numbers) {
    let answer = [];
    // js에서는 32비트 이상의 수는 비트연산하면 잘린다고 함
    // numbers.forEach(number => {
    //     let index = number+1;
    //     while(true){
    //         const bits = (index^number).toString(2).split("").filter(x => x === "1").length;
    //         if(bits === 1 || bits === 2){
    //             answer.push(index);
    //             break;
    //         }
    //         index++;
    //     }
    // })
    
    numbers.forEach(number => {
        if(number % 2 === 0){
            answer.push(number + 1);
        }
        else{
            let bin = number.toString(2).split("").reverse().join("");
            if(2 ** bin.length === number + 1){
                bin = bin + "0";
            }
            bin = bin.slice(0, bin.indexOf("10"))+"01"+bin.slice(bin.indexOf("10") + 2);
            answer.push(parseInt(bin.split("").reverse().join(""), 2));
            
        }
    })
    return answer;
}