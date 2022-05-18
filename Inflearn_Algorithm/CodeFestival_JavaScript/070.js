const a = [
	[1, 2],
	[2, 4],
];

const b = [
	[1, 0],
	[0, 3],
];

// 정직한 방법 (2*2일 때만 쓸만하다)
const matrixMul = (a, b) => {
	if(a[0].length !== b.length){
		return -1;
	}
	else{
		let result = [];
		for(let i = 0; i<b.length; i++){
			let row = [];
			for(let j = 0; j<b.length; j++){
				let col = 0;
				for(let k = 0; k<b.length; k++){
					col += a[i][k] * b[k][j];
				}
				row.push(col);
			}
			result.push(row);
		}
		return JSON.stringify(result);
	}
}

// 슈트라센 알고리즘 (행렬 크기가 클 경우)
// 추가하기

console.log(matrixMul(a, b));