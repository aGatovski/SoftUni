function getGCD(a,b){

while (b != 0) {
		let temp = a % b;
		a = b;
		b = temp;
	}

}

getGCD(15, 5)