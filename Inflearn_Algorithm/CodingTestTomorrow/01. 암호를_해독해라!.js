let data = ['   + -- + - + -   ', '   + --- + - +   ', '   + -- + - + -   ', '   + - + - + - +   '];

let result = "";

for(let s of data){
	result += String.fromCharCode(parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, 0), 2));
}

