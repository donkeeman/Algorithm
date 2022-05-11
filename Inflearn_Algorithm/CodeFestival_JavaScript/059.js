const str = readline();

const string50 = (str) => {
	if(str.length > 50){
		console.error("string.length must be under 50");
	}
	else{
		while(str.length < 50){
			str = "="+str;
			if(str.length == 50)
				break;
			str += "=";
		}
		console.log(str);
	}
}

string50(str);