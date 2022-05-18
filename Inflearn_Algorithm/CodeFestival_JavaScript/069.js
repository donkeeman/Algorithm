const n = parseInt(readline());

const isPrime = n => {
	if(n === 2){
		return true;
	}
	if(n < 2 || n % 2 === 0){
		return false;
	}
	for(let i = 3; i<=Math.sqrt(n)+1; i+=2){
		if(n % i === 0){
			return false;
		}
	}
	return true;
}

const goldbach = n => {
	if(n === 2 || n % 2 === 1){
		return;
	}
	let result = [];
	
	// for문
	for(let i = n/2; i<n; i++){
		if(isPrime(i) && isPrime(n - i)){
			result.push([n - i, i]);
		}
	}
	
	// while문
	// let i = n/2;
	// while(i < n){
	// 	if(isPrime(i) && isPrime(n - i)){
	// 		result.push([n - i, i]);
	// 	}
	// 	i++;
	// }
	
	return result;
}

console.log(`goldbach particion list: ${JSON.stringify(goldbach(n))}`);
console.log(`min sub particion: ${goldbach(n).shift()}`);
console.log(`max sub particion: ${goldbach(n).pop()}`);