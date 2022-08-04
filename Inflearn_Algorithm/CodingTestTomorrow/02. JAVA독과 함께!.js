function successDogs(bridge, dogs) {
	let result = [];
	for(let dog of dogs){
		let failure = false;
		let location = 0;
		while(location < bridge.length){
			location += parseInt(dog["점프력"], 10);
			bridge[location - 1] -= parseInt(dog["몸무게"], 10)
			if(bridge[location -1 ] < 0) {
				failure = true;
				break;
			}
		}
		if(!failure){
			result.push(dog["이름"]);
		}
	}
	return result;
}

console.log(successDogs([1, 2, 1, 4], [{
    "이름" : "루비독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "4",
    },{
    "이름" : "피치독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "3",
    },{
    "이름" : "씨-독",
    "나이" : "72년생",
    "점프력" : "2",
    "몸무게" : "1",
    },{
    "이름" : "코볼독",
    "나이" : "59년생",
    "점프력" : "1",
    "몸무게" : "1",
    },
]));

console.log(successDogs([5, 3, 4, 1, 3, 8, 3], [{
    "이름" : "루비독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "4",
    },{
    "이름" : "피치독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "3",
    },{
    "이름" : "씨-독",
    "나이" : "72년생",
    "점프력" : "2",
    "몸무게" : "1",
    },{
    "이름" : "코볼독",
    "나이" : "59년생",
    "점프력" : "1",
    "몸무게" : "1",
    },
]));