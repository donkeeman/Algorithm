const heights = readline().split(" ");

let isSorted = true;

// 시간을 더 줄일 수 있는 방법이 있는지?
for(let i = 0; i<heights.length-1; i++){
	if(heights[i] > heights[i+1]){
		isSorted = false;
		break;
	}
}

isSorted ? console.log("YES") : console.log("NO");